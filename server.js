var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, '192.168.20.225', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:%s',3000);
});