import React, {Component} from 'react';
require('./index.css');

export default class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            commentContent:''
        };
        this.setName = (event)=>this._setName(event);
        this.setContent = (event)=>this._setContent(event);
        this.saveComment = ()=>this._saveComment();
    }

    _setName(event){
        this.setState({
            name:event.target.value
        });
    }

    _setContent(event){
        this.setState({
            commentContent:event.target.value
        });
    }

    _saveComment(){
        //todo

    }

    render() {
        return (
            <div className="commentInput">
                <form className="commentForm">
                    <div className="name">
                        <label htmlFor="name">称呼：</label>
                        <input type="text" name="name" value={this.state.name} placeholder="称呼" onChange={this.setName}/>
                    </div>
                    <div className="commentContent">
                        <lable htmlFor="content">状态：</lable>
                        <textarea name="content" cols="30" rows="10" value={this.state.commentContent} placeholder="回复：" onChange={this.setContent}>
                        </textarea>
                    </div>
                    <span className="saveComment" onClick={this.saveComment}>确定</span>
                </form>
            </div>
        );
    }
}