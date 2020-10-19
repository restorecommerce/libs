"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchemaTypings = void 0;
const fs = __importStar(require("fs"));
const typescriptPlugin = __importStar(require("@graphql-codegen/typescript"));
const typescriptResolversPlugin = __importStar(require("@graphql-codegen/typescript-resolvers"));
const core_1 = require("@graphql-codegen/core");
async function generateSchemaTypings(schema, outputFile, contextType) {
    try {
        schema;
        const config = {
            // used by a plugin internally, although the 'typescript' plugin currently
            // returns the string output, rather than writing to a file
            filename: outputFile,
            schemaAst: schema,
            plugins: [
                {
                    typescript: {},
                },
                {
                    typescriptResolvers: {
                        contextType
                    },
                },
            ],
            pluginMap: {
                typescript: typescriptPlugin,
                typescriptResolvers: typescriptResolversPlugin,
            },
        };
        const output = await core_1.codegen(config);
        fs.writeFileSync(outputFile, output);
        console.log('Schema typings generated in' + outputFile);
    }
    catch (ex) {
        console.error(ex);
    }
}
exports.generateSchemaTypings = generateSchemaTypings;
