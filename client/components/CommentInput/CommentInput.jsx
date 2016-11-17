import React, {Component} from 'react';
import {Icon} from 'antd';
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
        this.refs.contentError.innerHTML=null;
    }

    _saveComment(){
        let {saveComment, parentId, blogId, closeInput} = this.props;
        let commentParentId = parentId || '';
        let commentContent = this.state.commentContent;
        let name = this.state.name;
        let that = this;
        //表单验证
        if(commentContent==''){
            return this.refs.contentError.innerHTML='留言内容不能为空 :)';
        }
        if(commentContent.length>200){
            return this.refs.contentError.innerHTML='留言最多说200字 :)';
        }
        if(name==''){
            name='匿名者';
        }
        saveComment({
            parentId:commentParentId,
            blogId:blogId,
            name: name,
            commentContent:commentContent
        }, function(){
            //回复子评论要关闭输入框
            if(closeInput){
                closeInput(true);
            }else {
                //回复文章要重置输入框
                that.setState({
                    name:'',
                    commentContent:''
                });
            }
        });

    }

    render() {
        return (
            <div className="commentInput">
                <form className="commentForm">
                    <div className="name formItem">
                        <label htmlFor="name">称呼：</label>
                        <input type="text" name="name" value={this.state.name} placeholder="称呼" onChange={this.setName}/>
                    </div>
                    <div className="commentContent formItem">
                        <label htmlFor="content">回复：</label>
                        <textarea name="content" cols="30" rows="5" value={this.state.commentContent} placeholder="回复一下：" onChange={this.setContent}>
                        </textarea>
                        <span className="error" ref="contentError"></span>
                    </div>
                    <span className="saveComment" onClick={this.saveComment}><Icon type="check"/></span>
                </form>
            </div>
        );
    }
}