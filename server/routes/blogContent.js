var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');

/*router.get('/(:id)',function(req, res, next){
    res.sendfile(path.resolve(__dirname,'../../client','index.html'));
});*/

router.post('/save',function(req, res, next){
    var blogContent = req.body;
    var blog = {
        id:10,
        author:'wangyafei',
        content:blogContent['content'],
        plaintext:blogContent['plaintext']
    };
    var blogJson = JSON.stringify(blog);
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
    })
});

router.post('/',function(req, res, next){
    var blogId = parseInt(req.body.blogId);
    var content = '';
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
                    /*var blog = Object.assign({}, blogData, {content:blogData['plaintext']});*/
                    /*req.send({
                        is_success:true,
                        blogContent:blogData['plaintext']
                    });*/
                    console.log(blogData['plaintext']);
                    content = blogData['plaintext'];
                    console.log(content);
                    res.send({
                        is_success:true,
                        blogContent:content
                    });
                }
            });
            break;
        default:
            content = '该博客不存在';
            console.log(blogId+'no');
    }
    /*res.send({
        is_success:true,
        blogContent:content
    });*/
});

module.exports = router;