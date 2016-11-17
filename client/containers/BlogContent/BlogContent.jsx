import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as Actions from '../../actions/Blogs';
import * as commentActions from '../../actions/Comments';
import Draft, {Editor, EditorState, ContentState, RichUtils} from 'draft-js';
import Comment from '../../components/Comment/Comment';
import {isEmptyObject} from '../../utils/util';
require('./index.css');

function getBlockStyle(contentBlock) {
    const blockType = contentBlock.getType();
    if (blockType === 'blockquote') {
        return 'superFancyBlockquote';
    }
}

const styleMap = {
    'CODE': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

class BlogContent extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
    }

    componentWillMount() {
        let {actions, blogs, blogContent} = this.props;
        if(blogs.length>0){
            let targetBlog = blogs.filter((blog)=>blog['id']==this.props.params.id);
            /*actions.initBlogContent(targetBlog[0]['_id']);*/
            actions.saveBlogCount(targetBlog[0]['_id'], targetBlog[0]['count']+1);
            console.log(JSON.stringify(blogContent));
        }else {
            browserHistory.push('/');
        }

        //this.setState({editorState: EditorState.createWithContent(ContentState.createFromBlockArray([blogContent]))});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({editorState: EditorState.createWithContent(Draft.convertFromRaw(nextProps.blogContent['content']))});
        }
    }

    handleNewComment(){
        console.log('ddd');
    }

    render() {
        let {blogContent, comments, commentActions} = this.props;
        if(!isEmptyObject(blogContent)){
            return (
                <div className="blogContentWrap container">
                    <h1 className="blogTitle">{blogContent['title']}</h1>
                    <p className="authorInfo">作者：{blogContent['author']}<span className="spliter"></span>浏览量：{blogContent['count']}</p>
                    <Editor
                        editorState={this.state.editorState}
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        readOnly={true}/>
                    <div className="comment">
                        <Comment comments={comments} blogId={blogContent['_id']} commentActions={commentActions}/>
                    </div>
                </div>
            );
        }else {
            return null;
        }

    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs.blogs,
        blogContent: state.blogs.blog,
        comments: state.comments.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
        commentActions:bindActionCreators(commentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContent);