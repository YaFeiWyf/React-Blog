var express = require('express');
var router = express.Router();
var fs = require('fs');
var DataController = require('../api/DataController');

router.get('/',function(res, req, next){
    fs.readFile('blog.json','utf-8', function(error, data){
        if(error){
            req.send('error');
        }else {
            var blogData = JSON.parse(data);
            var blog = Object.assign({}, blogData, {content:blogData['plaintext']});
            var controller = new DataController({});
            console.log(controller.add({name:'wangyafei'}));
            console.log(controller.modify({name:'wangyafei'}));
            console.log(controller.delete({name:'wangyafei'}));
            req.send({
                is_success:true,
                blogs:[
                    blog
                ]
            });
        }
    });
});

module.exports = router;