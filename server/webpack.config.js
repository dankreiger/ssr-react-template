const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.config');

const config = {
  entry: './server/server.js',
  target: 'node',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
