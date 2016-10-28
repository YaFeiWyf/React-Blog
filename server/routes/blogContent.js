var path = require('path');
var express = require('express');
var router = express.Router();

/*router.get('/(:id)',function(req, res, next){
    res.sendfile(path.resolve(__dirname,'../../client','index.html'));
});*/

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
        default:
            content = '该博客不存在';
            console.log(blogId+'no');
    }
    res.send({
        is_success:true,
        blogContent:content
    });
});

module.exports = router;