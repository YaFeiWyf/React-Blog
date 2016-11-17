/**
 * Created by wyf on 2016/11/17.
 */
"use strict";
var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');

router.route('/')
        .post(function(req, res){
            var commentData = req.body;
            var comment = new Comment({
                parentId:commentData['parentId'],
                blogId:commentData['blogId'],
                name: commentData['name'],
                commentTime: new Date(),
                commentContent: commentData['commentContent'],
                agree: 0,
                disagree: 0
            });
            comment.save(function (err, comment) {
                if(err){
                    res.send(err);
                }else {
                    res.send({
                        is_success:true,
                        comment:comment
                    });
                }
            });
        })
        .delete(function(req, res){
            Comment.remove({
                _id:req.body.commentId
            }, function(err, comment){
                if(err){
                    res.send(err);
                }else {
                    res.send({
                        commentId:comment['_id']
                    });
                }
            })
        });

router.route('/:comment_id')
        .post(function (req, res) {
            var commentData = req.body;
            Comment.findById(req.params.comment_id,function(err, comment){
                if(err){
                    res.send(err);
                }else {
                    comment['agree'] = commentData['agree'];
                    comment['disagree'] = commentData['disagree'];
                    comment.save(function(err, comment){
                        if(err){
                            res.send(err);
                        }else {
                            res.send({
                                is_success:true,
                                likeResult:{
                                    commentId:comment['_id'],
                                    agree:comment['agree'],
                                    disagree:comment['disagree']
                                }
                            });
                        }
                    });
                }
            });
        });

module.exports = router;