import * as _ from 'lodash';
import * as url from 'url';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as FormData from 'form-data';
import fetch from 'node-fetch'; // required for apollo-link-http
import { createHttpLink } from 'apollo-link-http';

function _checkVariableMutation(mutation: string): Boolean {
  const mutationName = mutation.slice(mutation.indexOf(' '),
    mutation.indexOf('($'));
  if (mutationName.indexOf('$') > 0) {
    return false;
  } else {
    return new RegExp('\\b' + mutationName + '\\(', 'i').test(mutation);
  }
}

function _replaceInlineVars(mutation: string, args: any): string {
  if (mutation)
    return mutation.replace(/\${(\w+)}/g, (_, v) => args[v]);
}

function _createQueryVariables(inputVarName: string, queryVarKey: string, varValue: any): Object {
  if (queryVarKey) {
    return {
      [inputVarName]: {
        [queryVarKey]: JSON.parse(varValue)
      }
    };
  }

  return {
    [inputVarName]: JSON.parse(varValue)
  };
}

export class Client {
  opts: any;
  metaQs: any;
  entryBaseUrl: string;
  constructor(opts: any) {
    if (_.isNil(opts)) {
      throw new Error('Missing options parameter');
    }

    this.metaQs = { meta: true };

    _.defaults(opts, {
      entry: null,
      protocol: 'http',
      apiKey: null,
      headers: {}
    });

    const required = ['entry'];
    required.forEach((key) => {
      if (!opts[key]) {
        throw new Error('Missing option: \'' + key + '\'');
      }
    });

    this.opts = opts;
    this._buildURLs();

    _.assign(this.opts.headers, {
      Accept: 'application/json',
      Origin: this.entryBaseUrl
    });
  }

  _buildURLs(): any {
    const entry = this.opts.entry;
    if (!String(entry).startsWith('http')) {
      this.opts.entry = this.opts.protocol + '://' + entry;
    }
    const parsedEntry = url.parse(entry);
    if (parsedEntry.protocol) {
      this.opts.protocol = parsedEntry.protocol;
    }
    const protocol = this.opts.protocol + '//';
    this.entryBaseUrl = protocol + parsedEntry.host + parsedEntry.path;
  }

  _normalizeUrl(source?: any): string {
    let extendURL = '';

    if (source) {
      // this is source.path /restore/oss-client/test/folder/file.1
      if (!source.path && source != true) {
        extendURL = source;
      }
      if (source.path) {
        // TODO: read this 'the Node way'
        extendURL = fs.readFileSync(source.path).toString();
        extendURL = '?query=' + extendURL;
      }
    }
    return url.resolve(this.entryBaseUrl, extendURL);
  }

  async post(source: any, job?: any, accessControl?: any,
    formOptions?: any): Promise<any> {
    let parsed;
    try {
      parsed = JSON.parse(source);
    } catch (e) {
      parsed = yaml.load(source);
    }
    const normalUrl = this._normalizeUrl();

    let caseExpression;
    if (parsed.resource_list) {
      caseExpression = 'json';
    } else if (parsed.yaml_file_paths) {
      caseExpression = 'yaml';
    } else if (parsed.upload_file_paths) {
      caseExpression = 'blob';
    }

    let mutation;
    if (job && job.mutation) {
      mutation = JSON.stringify(job.mutation);
    } else if (parsed && parsed.mutation) {
      mutation = JSON.stringify(parsed.mutation);
    } else {
      throw new Error('mutation not present in job config');
    }

    const apiKey = JSON.stringify(this.opts.apiKey);
    let resource_list: any = [];
    let fileStreams;
    switch (caseExpression) {
      case 'json':
        resource_list = JSON.stringify(parsed.resource_list);
        break;

      case 'yaml':
        _.forEach(parsed.yaml_file_paths, (ymlFilePath) => {
          const doc = yaml.safeLoad(fs.readFileSync(ymlFilePath,
            'utf8'));
          const rootKey = Object.keys(doc)[0];
          resource_list = doc[rootKey];
          resource_list = JSON.stringify(resource_list);
        });
        break;

      case 'blob':
        fileStreams = [];
        _.forEach(parsed.upload_file_paths, (uploadFilePath) => {
          fileStreams.push(fs.createReadStream(uploadFilePath));
        });
        break;

      default:
        console.log('File format not recognizable');
    }

    if (mutation) {
      // don't replace quoted strings inside outer quotes
      // (i.e. if the quote is preceded by a backslash)
      // make sure to also match line/expression start
      // and keep the symbol preceding the quote
      mutation = mutation.replace(/(^|[^\\])\"/g, '$1');
      // afterwards, replace escaped quotes with regular ones
      mutation = mutation.replace(/\\\"/g, '\"');
    }

    let variables;
    if (!fileStreams) {
      if (_checkVariableMutation(mutation)) {
        const queryVarKey = job.queryVariables || parsed.queryVariables;
        const inputVarName = mutation.slice(mutation.indexOf('$') + 1, mutation.indexOf(':'));
        variables = _createQueryVariables(inputVarName, queryVarKey, resource_list);
      } else {
        // To remove double quotes from the keys in JSON data
        resource_list = resource_list.replace(/\"([^(\")"]+)\":/g, '$1:');
        mutation = _replaceInlineVars(mutation, { resource_list, apiKey });
      }
    }

    const apolloLinkOpts = {
      uri: normalUrl,
      fetch
    };

    if (this.opts.headers) {
      apolloLinkOpts['headers'] = this.opts.headers;
    }

    if (fileStreams) {
      // It is currently assumed that the provided mutation only allows for uploading a single file,
      // and hence that uploads need to be run one by one.
      const uploads = [];
      for (let stream of fileStreams) {
        const form = new FormData();
        form.append(
          'operations',
          JSON.stringify({
            query: `${mutation}`,
            variables: { file: null }
          })
        );
        form.append('map', JSON.stringify({ 1: ['variables.file'] }));
        form.append('1', stream);

        let headers = _.assign({}, this.opts.headers);
        // need to assign the form headers too here to send the request properly
        uploads.push(
          fetch(normalUrl, { method: 'POST', headers: _.assign(headers, form.getHeaders()), body: form })
        );
      }
      return Promise.all(uploads);

    } else {
      let apolloLink = createHttpLink(apolloLinkOpts);

      // now what exactly is/was "...others"?
      // const gqlClient = new GraphQLClient(normalUrl, _.pick(this.opts, ['headers', '...others']));

      const apolloCache = new InMemoryCache();
      const apolloClient = new ApolloClient({
        cache: apolloCache,
        link: apolloLink
      });

      return apolloClient.mutate({
        mutation: gql`${mutation}`,
        variables
      });
    }
  }
}
