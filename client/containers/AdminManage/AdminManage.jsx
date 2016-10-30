import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import ContentEditor from '../../components/ContentEditor/ContentEditor';
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
        return (
            <div className="adminContainer container">
               {/* <div onClick={()=>actions.fetchTest()}>新增博客</div>*/}
               <div className="titleWrap">
                   <div className="adminTitle">后台管理页面</div>
               </div>
                <ContentEditor />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        login:state.login
    }
}

export default connect(mapStateToProps)(AdminManage);

