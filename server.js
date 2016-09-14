const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const isLocal = process.argv[2] === '--dev';

new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
    hot: isLocal,
    historyApiFallback: true,
  }
)
.listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
