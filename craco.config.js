const cracoModuleFederation = require('craco-module-federation');
const path = require('path');
const CracoAlias = require('craco-alias')

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3001,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,

    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
  },
};