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
    publishDate:Date,
    blogStatus:String,
    count:Number
});

/**
 * here can add some methods and statics
 * @type {U|"mongoose".Model<T>}
 */
blogSchema.statics.findByStatus=function(blogStatus, cb){
    return this.find({blogStatus:new RegExp(blogStatus, 'i')}, cb);
};

module.exports = mongoose.model('Blog',blogSchema);