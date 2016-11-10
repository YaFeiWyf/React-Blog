import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/Blogs';
import Draft, {Editor, EditorState, ContentState, RichUtils} from 'draft-js';
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
        let targetBlog = blogs.filter((blog)=>blog['id']==this.props.params.id);
        actions.initBlogContent(targetBlog[0]['_id']);
        console.log(JSON.stringify(blogContent));
        //this.setState({editorState: EditorState.createWithContent(ContentState.createFromBlockArray([blogContent]))});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({editorState: EditorState.createWithContent(Draft.convertFromRaw(nextProps.blogContent['content']))});
        }
    }

    render() {
        return (
            <div className="blogContentWrap container">
                <Editor
                    editorState={this.state.editorState}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    readOnly={true}/>
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