import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Blogs';
require('./index.css');

class BlogContent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let {actions} = this.props;
        actions.initBlogContent(this.props.params.id);
    }

    render() {
        let {blogContent} = this.props;
        return (
            <div className="blogContentWrap container">
                {blogContent['content']}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogContent: state.blogs.blogContent
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContent);