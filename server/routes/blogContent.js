"use strict";
var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Blog = require('../models/blogs');

/*router.get('/(:id)',function(req, res, next){
    res.sendfile(path.resolve(__dirname,'../../client','index.html'));
});*/
function saveBlog(blog, res){
    blog.save(function(err){
        if(err){
            console.log(err);
        }else {
            res.send({
                save_success:true,
                blog:blog
            });
        }
    });
}

router.post('/save',function(req, res, next){
    var blogData = req.body;
    blogData['title']='这是第一篇博客';
    /**
     * 判断是新增还是修改
     */
    Blog.find({_id:blogData['id']},function(err, blogList){
        //修改
        if(blogList.length>0){
            var blog = Object.assign({},blogList[0],blogData);
            saveBlog(blog, res);
        }else {
            Blog.find(function(err, blogList){
                var blog = new Blog({
                    id:blogList.length+1,
                    author:'wangyafei',
                    title:blogData['title'],
                    content:JSON.stringify(blogData['rowData']),
                    plaintext:blogData['plaintext'],
                    publishDate:new Date()
                });
                saveBlog(blog, res);
            });
        }
    });


    /*var blog = {
        id:10,
        author:'wangyafei',
        content:blogContent['rowData'],
        plaintext:blogContent['plaintext']
    };
    var blogJson = JSON.stringify(blog);
    blog = Object.assign({}, blog, {content:blog['plaintext']});
    fs.writeFile('blog.json', blogJson, function (error, data) {
        if(error){
            res.send({
                save_success:false,
                blog:''
            });
        }else {
            res.send({
                save_success:true,
                blog:blog
            });
        }
    })*/
});

router.post('/',function(req, res, next){
    var blogId = parseInt(req.body.blogId);
    Blog.find(blogId,function(err, blogList){
        if(err){
            console.log(err);
        }else {
            res.send({
                is_success:true,
                blog:blogList[0]
            });
        }
    });
    /*var content = '';
    switch(blogId){
        case 1:
            content = '这是第一篇博客';
            break;
        case 2:
            content = '这是第二篇博客';
            console.log(blogId+'2');
            break;
        case 3:
            content = '这是第三篇博客';
            break;
        case 4:
            content = '这是第四篇博客';
            break;
        case 10:
            fs.readFile('blog.json','utf-8', function(error, data){
                if(error){
                    req.send('error');
                }else {
                    var blogData = JSON.parse(data);
                    /!*var blog = Object.assign({}, blogData, {content:blogData['plaintext']});*!/
                    /!*req.send({
                        is_success:true,
                        blogContent:blogData['plaintext']
                    });*!/
                    console.log(blogData['plaintext']);
                    content = blogData['plaintext'];
                    console.log(content);
                    res.send({
                        is_success:true,
                        blogContent:blogData
                    });
                }
            });
            break;
        default:
            content = '该博客不存在';
            console.log(blogId+'no');
    }*/
    /*res.send({
        is_success:true,
        blogContent:content
    });*/
});

module.exports = router;