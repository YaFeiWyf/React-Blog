/**
 * Created by wyf on 2016/10/12.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');
//var dbConnect = require('../db/dbConnect');

router.post('/',function(req, res){
    var data = req.body;
   /*var user = new User({
        userName:'lihuan',
        password:'lihuan0215'
    });
    user.save(function (err) {
        if (err) return handleError(err);
    });*/
    User.find({userName:data['userName']},function(err, userList){
        console.log(data['pass']);
        console.log(userList);
        /*console.log(userList[0]['password']);
        console.log(data['pass']==userList[0]['password']);*/
        if(err){
            console.log(err);
        }else {
            if(userList.length>0){
                if(data['pass']==userList[0]['password']){
                    res.send({
                        is_success:true,
                        authCookie:'029093'
                    });
                }else {
                    res.send({
                        is_success:false
                    });
                }
            }else {
                res.send({
                    is_success:false
                });
            }

        }
    });
    /*db.on('connected', function () {
        /!*mongoose.connection.db.collectionNames(function (err, names) {
            if (err) console.log(err);
            else console.log(names);
        });*!/
        console.log(data);
        console.log('running');
    });*/
    /*db.once('open', function() {
        // we're connected!
        console.log('connected');
        console.log('running');
        var userSchema = new Schema({
            userName:String,
            password:String
        });

        var User = mongoose.model('User', userSchema);
        var user = new User({
            userName:'wangyafei',
            password:'123456'
        });
        user.save(function (err) {
            if (err) return handleError(err);
            // saved!
        });
        User.find({userName:data['userName']},function(err, user){
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
    });*/
    /*dbConnect.once('open',function(){
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
    });*/

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
