var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
	var data = req.body;
	res.send({
		id:333,
		author:data['name'],
		content:data['content']
	});
});

module.exports = router;