'use strict';
var express = require('express');
var router = express.Router();
var Blog = require('../models/blogs');

router.get('/',function(res, req, next){
    var is_login = res.query.is_login;
    console.log(typeof is_login);
    console.log('fdsfdsafdsa');
    if(is_login=='true'){
        Blog.find(function(err, blogList){
            console.log('denglu le ');
            if(err){
                console.log(err);
            }else {
                req.send({
                    is_success:true,
                    blogs:blogList
                });
            }
        });
    }else {
        Blog.findByStatus('publish',function(err, blogList){
            console.log(blogList);
            console.log('mei denglule ');
            if(err){
                console.log(err);
            }else {
                req.send({
                    is_success:true,
                    blogs:blogList
                });
            }
        });
    }

    /*fs.readFile('blog.json','utf-8', function(error, data){
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
    });*/
});

module.exports = router;