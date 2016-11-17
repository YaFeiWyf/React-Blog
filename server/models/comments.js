/**
 * Created by wyf on 2016/11/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    parentId:String,
    blogId:String,
    name: String,
    commentTime: Date,
    commentContent:String,
    agree: Number,
    disagree: Number
});

/**
 *here can add same methods or statics
 */

module.exports = mongoose.model('Comment', commentSchema);