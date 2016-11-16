import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as Actions from '../../actions/Blogs';
import Draft, {Editor, EditorState, ContentState, RichUtils} from 'draft-js';
import ReactDisqusThread from 'react-disqus-thread';
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
        let {blogContent} = this.props;
        return (
            <div className="blogContentWrap container">
                <h1 className="blogTitle">{blogContent['title']}</h1>
                <p className="authorInfo">作者：{blogContent['author']}<span className="spliter"></span>浏览量：{blogContent['count']}</p>
                <Editor
                    editorState={this.state.editorState}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    readOnly={true}/>
                <div className="disqus">
                    {/*<ReactDisqusThread
                        shortname="http-www-yvanwang-com"
                        identifier="something-unique-12345"
                        title={blogContent['title']}
                        url={"http://blog.yvanwang.com/blog/"+blogContent["id"]}
                        category_id="develop"
                        onNewComment={this.handleNewComment}/>*/}
                    {/*多说评论框 start*/}
                    <div className="ds-thread" data-thread-key={blogContent['_id']} data-title={blogContent['title']} data-url={'http://blog.yvanwang.com/'+blogContent['id']}></div>
                    {/*多说评论框 end*/}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs.blogs,
        blogContent: state.blogs.blog
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContent);