import React, {Component} from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentItem from '../CommentItem/CommentItem';
require('./index.css');

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {comments} = this.props;
        let commentItems = [];
        comments.map((comment)=>{
            commentItems.push(<CommentItem comment={comment}/>)
        });
        return (
            <div className="commentWrap">
                <CommentInput />
                {commentItems}
            </div>
        );
    }
}