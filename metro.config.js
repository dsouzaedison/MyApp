/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**
 * @see https://obfuscator.io - For settings
 */
const settingsFromWeb = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: false,
  debugProtectionInterval: false,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: true,
  shuffleStringArray: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 10,
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 4,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: false,
};

const jsoMetroPlugin = require('obfuscator-io-metro-plugin')(
  {
    // for these option look javascript-obfuscator library options from  above url
    // compact: true,
    // sourceMap: true,
    // controlFlowFlattening: true,
    // controlFlowFlatteningThreshold: 1,
    // numbersToExpressions: true,
    // simplify: true,
    // shuffleStringArray: true,
    // splitStrings: true,
    // stringArrayThreshold: 1,
    // identifierNamesGenerator: 'hexadecimal',
    renamePropertiesMode: 'safe',
    renameProperties: true,
    ...settingsFromWeb,
  },
  {
    runInDev: true /* optional */,
    logObfuscatedFiles: true /* optional generated files will be located at ./.jso */,
    sourceMapLocation:
      './index.android.bundle.map' /* optional  only works if sourceMap: true in obfuscation option */,
  },
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  ...jsoMetroPlugin,
};
