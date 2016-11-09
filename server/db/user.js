/**
 * Created by wyf on 2016/11/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbConnect = require('./dbConnect');
dbConnect.once('open',function(){
    var userSchema = new Schema({
        userName:String,
        password:String
    });

    var userModel = mongoose.model('User', userSchema);
    var user = new userModel({
        userName:'wangyafei',
        password:'123456'
    });

    module.exports = userModel;
});