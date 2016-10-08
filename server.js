/*var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express();
var path  = require('path');

app.use(express.static(path.join(__dirname, '/client')));*/

/*var server = new WebpackDevServer(webpack(config), {
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

server.get('/test',function(req, res){
  res.status(200).send({id:1,author:'wangyafei',content:'this come from server.js'});
});*/

/*app.get('/test',function(req, res){
  res.status(200).send({id:1,author:'wangyafei',content:'this come from server.js'});
});

app.listen(3000,'127.0.0.1');*/

/*var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});*/
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

app.get('/test',function(req, res){
  res.status(200).send({id:1,author:'wangyafei',content:'this come from server.js'});
});

app.post('/test',function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.body);
  res.status(200).send({id:1,author:'wangyafei',content:'this come from server.js and this method is post'});
});

app.listen(3000,'127.0.0.1');