import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import ContentEditor from '../../components/ContentEditor/ContentEditor';
import * as Actions from '../../actions/Blogs';
require('./index.css');

class AdminManage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {login} = this.props;
        if (!login.is_login) {
            alert('请登录');
            browserHistory.push('/');
        }
    }

    render() {
        let {actions, blogContent} = this.props;
        let editData = null;
        if (this.props.params.id) {
            editData = blogContent;
        }
        return (
            <div className="adminContainer container">
                {/* <div onClick={()=>actions.fetchTest()}>新增博客</div>*/}
                <div className="titleWrap">
                    <div className="adminTitle">后台管理页面</div>
                </div>
                <ContentEditor saveBlog={actions.saveBlog} editData={editData}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        blogContent: state.blogs.blog
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminManage);

