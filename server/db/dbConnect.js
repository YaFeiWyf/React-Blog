/**
 * Created by wyf on 2016/11/9.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var db = mongoose.connection;
db.on('error',function(error){
    console.log(error);
});

module.exports = db;