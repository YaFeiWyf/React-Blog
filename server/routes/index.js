var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	/*数据操作模块 data model*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
