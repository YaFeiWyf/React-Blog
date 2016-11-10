/**
 * Created by wyf on 2016/11/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:String,
    password:String,
    salt:String,
    admin:Boolean
});

/**
 *here can add same methods or statics
 */


module.exports = mongoose.model('User', userSchema);