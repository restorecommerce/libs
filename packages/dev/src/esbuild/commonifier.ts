import * as fs from 'fs'

export const commonifierPlugin = {
  name: 'commonifier',
  setup ({ onLoad }: any) {
    onLoad({ filter: /.*\.js$/, namespace: 'file' }, async (args: any) => {
      let source = fs.readFileSync(args.path, 'utf8');
      let commonified = source;

      // Convert directory lookups
      commonified = commonified.replaceAll('import.meta.dir', '__dirname');
      commonified = commonified.replaceAll('import.meta.dirname', '__dirname');

      // Convert file lookups
      commonified = commonified.replaceAll('import.meta.path', '__filename');
      commonified = commonified.replaceAll('import.meta.filename', '__filename');
      commonified = commonified.replaceAll('import.meta.url', '"file://" + __filename');

      // Pass through environment variables
      commonified = commonified.replaceAll('import.meta.env', 'process.env');

      // Bundles are always the entrypoint
      commonified = commonified.replaceAll('import.meta.main', 'true');

      return { contents: commonified }
    });
  }
};
