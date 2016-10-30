import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import ContentEditor from '../../components/ContentEditor/ContentEditor';
import {saveBlog} from '../../actions/Blogs';
require('./index.css');

class AdminManage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const {login} = this.props;
        /*if(!login.is_login){
            alert('请登录');
            browserHistory.push('/');
        }*/
    }

    render() {
        let {saveBlog} = this.props;
        return (
            <div className="adminContainer container">
               {/* <div onClick={()=>actions.fetchTest()}>新增博客</div>*/}
               <div className="titleWrap">
                   <div className="adminTitle">后台管理页面</div>
               </div>
                <ContentEditor saveBlog={saveBlog}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        login:state.login
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveBlog:bindActionCreators(saveBlog, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminManage);

