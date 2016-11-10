/**
 * Created by wyf on 2016/11/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    id:Number,
    title:String,
    author:String,
    plaintext:String,
    content:String,
    publishDate:Date
});

/**
 * here can add some methods and statics
 * @type {U|"mongoose".Model<T>}
 */

module.exports = mongoose.model('Blog',blogSchema);