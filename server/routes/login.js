/**
 * Created by hanlu on 2016/10/12.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/blog');
var dbConnect = mongoose.createConnection('mongodb://127.0.0.1:27017/blog');
dbConnect.on('error',function(error){
    console.log(error);
});
var Schema = mongoose.Schema;
//var dbConnect = require('../db/dbConnect');

router.post('/',function(req, res){
    var data = req.body;
    console.log(data);
    dbConnect.once('open',function(){
        console.log('running');
        var userSchema = new Schema({
            userName:String,
            password:String
        });

        var userModel = mongoose.model('User', userSchema);
        var user = new userModel({
            userName:'wangyafei',
            password:'123456'
        });
        userModel.find({userName:data['userName']},function(err, user){
            if(err){
                console.log(err);
            }else {
                if(data['pass']==user['password']){
                    res.send({
                        is_success:true,
                        authCookie:'029093'
                    });
                }else {
                    res.send({
                        is_success:false
                    });
                }
            }
        });
    });

    /*if(data['userName']=='wangyafei'&& data['pass']=='123456'){
        res.send({
            is_success:true,
            authCookie:'029093'
        });
    }else {
        res.send({
            is_success:false
        });
    }*/
});

module.exports = router;
