/**
 * Created by hanlu on 2016/10/12.
 */
var express = require('express');
var router = express.Router();

router.post('/',function(req, res){
    "use strict";
    var data = req.body;
    console.log(data);
    if(data['userName']=='wangyafei'&& data['pass']=='123456'){
        res.send({
            result:'login success'
        });
    }else {
        res.send({
            result:'login fail'
        });
    }
});

module.exports = router;
