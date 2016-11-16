import React, {Component} from 'react';
import defaultImg from './images/default.png';
import CommentInput from '../CommentInput/CommentInput';
require('./index.css');

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addChildComment:false
        };
        this.replyClick = (event)=>this._replyClick(event);
    }

    _replyClick(event){
        this.setState({
            addChildComment:!this.state.addChildComment
        });
    }

    render() {
        let {comment} = this.props;
        return (
            <div className="commentItem">
                <div className="commentatorInfo">
                    <img src={defaultImg} alt="默认头像" className="avator"/>
                    <p className="commentatorName">{comment['name']}</p>
                    <p className="commentTime">{comment['commentTime']}</p>
                </div>
                <p className="commentContent">
                    {comment['commentContent']}
                </p>
                <div className="commentAction">
                    <span className="agree">赞同</span>
                    <span className="reply" onClick={this.replyClick}>回复</span>
                </div>
                {this.state.addChildComment?<CommentInput />:null}
            </div>
        );
    }
}