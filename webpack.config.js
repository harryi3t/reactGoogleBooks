const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

const isLocal = process.argv[2] === '--dev';
const moduleLoaders = ['babel?presets[]=es2015,presets[]=react'];
const moduleEntry = ['./src/index'];

if (isLocal) {
  moduleLoaders.unshift('react-hot');
  moduleEntry.unshift('webpack/hot/only-dev-server');
  moduleEntry.unshift('webpack-dev-server/client?http://localhost:3000');
}

module.exports = {
  entry: moduleEntry,
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: moduleLoaders,
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin({
      test: /bundle.js$/
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
