"use strict";
var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Blog = require('../models/blogs');
var Comment = require('../models/comments');

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
    //blogData['title']='这是第一篇博客';
    /**
     * 判断是新增还是修改
     */
    console.log(typeof blogData['id']);
    Blog.findById(blogData['id'],function(err, blog){
        //修改
        if(blog){
            console.log(blogData['plaintext']);
            console.log(blogData['rowData']);
            var modifyData = {
                title:blogData['title'],
                content:JSON.stringify(blogData['rowData']),
                plaintext:blogData['plaintext'],
                publishDate:new Date(),
                blogStatus:blogData['blogStatus']
            };
            console.log(blog);
            //var blog = Object.assign({}, blogList[0], modifyData);
            blog['title'] = blogData['title'];
            blog['author'] = blogData['author'];
            blog['content'] = JSON.stringify(blogData['rowData']);
            blog['plaintext'] = blogData['plaintext'];
            blog['publishDate'] = new Date();
            blog['blogStatus'] = blogData['blogStatus'];
            console.log(blog);
            saveBlog(blog, res);
        }else {
            Blog.find(function(err, blogList){
                var blog = new Blog({
                    id:blogList[blogList.length-1]['id']+1,
                    title:blogData['title'],
                    author:blogData['author'],
                    content:JSON.stringify(blogData['rowData']),
                    plaintext:blogData['plaintext'],
                    publishDate:new Date(),
                    blogStatus:blogData['blogStatus']
                });
                saveBlog(blog, res);
            });
        }
    });
});

router.post('/',function(req, res, next){
    var blogId = req.body.blogId;
    console.log(blogId);
    Blog.findById(blogId,function(err, blog){
        console.log(blog);
        if(err){
            console.log(err);
        }else {
            res.send({
                is_success:true,
                blog:blog
            });
        }
    });
});

router.post('/saveCount', function(req, res, next){
    var blogCount = req.body;
    Blog.findById(blogCount['blogId'],function(err, blog){
        console.log(blog);
        if(err){
            console.log(err);
        }else {
            blog['count'] = blogCount['count'];
            blog.save(function(err){
                if(err){
                    console.log(err);
                }else {
                    Comment.find({blogId:blog['_id']}, function (err, comments) {
                        if(err){
                            res.send(err);
                        }else {
                            res.send({
                                save_success:true,
                                blog:blog,
                                comments:comments
                            });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;