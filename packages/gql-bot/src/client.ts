import * as _ from 'lodash';
import * as url from 'url';
import * as fs from 'fs';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch'; // required for apollo-link-http
import { createHttpLink } from 'apollo-link-http';

const _checkVariableMutation = (mutation: string): Boolean => {
  const mutationName = mutation.slice(mutation.indexOf(' '),
    mutation.indexOf('($'));
  if (mutationName.indexOf('$') > 0) {
    return false;
  } else {
    return new RegExp('\\b' + mutationName + '\\(', 'i').test(mutation);
  }
};

const _replaceInlineVars = (mutation: string, args: any): string => {
  if (mutation)
    return mutation.replace(/\${(\w+)}/g, (_, v) => args[v]);
};

const _createQueryVariables = (inputVarName: string, queryVarKey: string, varValue: any): Object => {
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
};

const checkError = (data: any): any => {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      const result = data.map(value => {
        const inner = checkError(value);
        if (inner) {
          return inner;
        }
      }).filter(value => !!value);
      if (result.length > 0) {
        return result;
      }
    } else {
      if ('__typename' in data) {
        switch (data['__typename']) {
          case 'IoRestorecommerceStatusOperationStatus':
          case 'IoRestorecommerceStatusStatus':
            if ('code' in data) {
              const code = data['code'];
              if (code != '' && code != '200' && code != 0 && code != 200) {
                return data;
              }
            }
            break;
        }
      }

      for (const value of Object.values(data)) {
        const inner = checkError(value);
        if (inner) {
          return inner;
        }
      }
    }
  }
  return undefined;
};

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

  async post(source: any, job?: any, verbose = false): Promise<any> {
    const normalUrl = this._normalizeUrl();

    let mutation;
    if (job && job.mutation) {
      mutation = JSON.stringify(job.mutation);
    } else {
      throw new Error(`mutation not present in job config (${job.name})`);
    }

    const apiKey = JSON.stringify(this.opts.apiKey);
    let resource_list = JSON.stringify(source);

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
    if (_checkVariableMutation(mutation)) {
      const queryVarKey = job.queryVariables;
      const inputVarName = mutation.slice(mutation.indexOf('$') + 1, mutation.indexOf(':'));
      variables = _createQueryVariables(inputVarName, queryVarKey, resource_list);
    } else {
      // To remove double quotes from the keys in JSON data
      resource_list = resource_list.replace(/\"([^(\")"]+)\":/g, '$1:');
      mutation = _replaceInlineVars(mutation, { resource_list, apiKey });
    }

    const apolloLinkOpts = {
      uri: normalUrl,
      fetch
    };

    if (this.opts.headers) {
      apolloLinkOpts['headers'] = this.opts.headers;
    }

    let apolloLink = createHttpLink(apolloLinkOpts);

    const apolloCache = new InMemoryCache();
    const apolloClient = new ApolloClient({
      cache: apolloCache,
      link: apolloLink
    });

    const response = await apolloClient.mutate({
      mutation: gql`${mutation}`,
      variables
    });

    const error = checkError(response);
    if (error) {
      if (verbose) {
        console.error(JSON.stringify({
          request: mutation,
          variables,
          response
        }));
      }
      throw new Error(JSON.stringify(error));
    }

    return response;
  }
}
