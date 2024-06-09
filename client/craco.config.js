// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const cracoAlias = require('craco-alias');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
