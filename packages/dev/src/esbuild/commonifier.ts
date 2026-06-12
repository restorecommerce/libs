import fs from 'node:fs';

export const commonifierPlugin = {
  name: 'commonifier',
  setup ({ onLoad }: any) {
    onLoad({ filter: /.*\.js$/, namespace: 'file' }, async (args: any) => {
      let source = fs.readFileSync(args.path, 'utf8');
      let commonified = source;

      // Convert directory lookups
      commonified = commonified.replace(/import.meta.dir/g, '__dirname');
      commonified = commonified.replace(/import.meta.dirname/g, '__dirname');

      // Convert file lookups
      commonified = commonified.replace(/import.meta.path/g, '__filename');
      commonified = commonified.replace(/import.meta.filename/g, '__filename');
      commonified = commonified.replace(/import.meta.url/g, '"file://" + __filename');

      // Pass through environment variables
      commonified = commonified.replace(/import.meta.env/g, 'process.env');

      // Bundles are always the entrypoint
      commonified = commonified.replace(/import.meta.main/g, 'true');

      return { contents: commonified }
    });
  }
};
