var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express();
var path  = require('path');

app.use(express.static(path.join(__dirname, '/client')));

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, '127.0.0.1', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

/*var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});*/