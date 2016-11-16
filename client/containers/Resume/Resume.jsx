'use strict';

import React, {Component} from 'react';
/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group';*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Resume';
import {logOut} from '../../actions/Login';
import avatarFei  from './images/logo.jpg';
import avatarHuan  from './images/background.jpg';
import NavLink from '../../components/NavLink/NavLink';
import {browserHistory} from 'react-router';
import $ from 'jquery';
require ('./index.css');
require ('./images/logo.jpg');

class Resume extends Component {
	constructor(props){
		super(props);
	}

    logClick(){
        const {login, logOut} = this.props;
        if(login.is_login){
            logOut();
            browserHistory.push('/');
        }else {
            browserHistory.push('/login');
        }
    }

	onHoverEvent(event){
	    let windowHeight = $(window).height();
	    let halfWindowHeight = windowHeight/2;
        let pageY = event.pageY;
        let resumeContianer = this.refs.resumeContianer;
        let $resumeContianer = $(resumeContianer);
        let resumeContianerHeight = $resumeContianer.innerHeight();
        let diffHeight = resumeContianerHeight-windowHeight;
        if(pageY>halfWindowHeight){
            $resumeContianer.css({top:-diffHeight+"px"});
        }else {
            $resumeContianer.css({top:0});
        }
	}

	render(){
		const { resumeInfo,login, actions } = this.props;
		return (
			<div className="rootContainer">
                <div className="resumeWrap">
                    <div className="resumeContianer" ref="resumeContianer" onMouseOver={this.onHoverEvent.bind(this)}>
                        <img src={resumeInfo.page=='huan'?avatarHuan:avatarFei} alt="me"/>
                        <h1 className='resumeTitle'>{resumeInfo.resumeTitle}</h1>
                        <p className='personalInfo'>{resumeInfo.personalInfo}{resumeInfo.page=='huan'?'':<a href="http://www.yvanwang.com">个人网站</a>}</p>
                        <p className="currentState">{resumeInfo.currentState}</p>
                        <div className="buttons">
                            <NavLink className="indexPage button" to='/'>首页</NavLink>
                            <NavLink className="login button" onClick={this.logClick.bind(this)}>{login.is_login?'退出':'登录'}</NavLink>
                        </div>
                    </div>
                </div>
				{this.props.children}
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		resumeInfo: state.resume,
        login:state.login
	};
}

function mapActionsToProps(dispatch){
	return {
		actions: bindActionCreators(Actions, dispatch),
        logOut:bindActionCreators(logOut, dispatch)
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Resume);