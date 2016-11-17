import React, {Component} from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentItem from '../CommentItem/CommentItem';
import {formatComments} from '../../utils/util';
require('./index.css');

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {comments , commentActions, blogId} = this.props;
        let commentItems = [];
        /**
         * 对评论进行序列化操作
         * 对评论按日期进行倒叙
         * 对评论进行子评论组织
         */
        let newComments = formatComments(comments);
        newComments.map((comment)=>{
            commentItems.push(<CommentItem key={comment['_id']} comment={comment} blogId={blogId} commentActions={commentActions}/>)
            if(comment['children']) {
                comment['children'].map((c)=>{
                    commentItems.push(<CommentItem key={c['_id']} comment={comment} blogId={blogId} commentActions={commentActions}/>)
                })
            }
        });
        return (
            <div className="commentWrap">
                <h2 className="commentTitle">[ 评论一角 ]</h2>
                <CommentInput blogId={blogId} saveComment={commentActions.saveComment} />
                {commentItems}
            </div>
        );
    }
}