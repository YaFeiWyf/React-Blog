/**
 * Created by hanlu on 2016/10/12.
 */
var express = require('express');
var router = express.Router();

router.post('/',function(req, res){
    "use strict";
    var data = req.body;
    res.send({
        id:333,
        author:data['name'],
        content:data['content']
    });
});

module.exports = router;