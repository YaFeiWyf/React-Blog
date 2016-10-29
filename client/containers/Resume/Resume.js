'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Resume';
import {logOut} from '../../actions/Login';
import imgSrc from './images/logo.jpg';
import NavLink from '../../components/NavLink/NavLink';
import {browserHistory} from 'react-router';
require ('./index.css');
require ('./images/logo.jpg');

class Resume extends Component {
	constructor(props){
		super(props);
        this.setState({
            showBackButton:false
        })
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

	render(){
		const { resumeInfo,login, actions } = this.props;
		return (
			<div className="rootContainer">
				<div className='resumeContianer'>
					<img src={imgSrc} alt="me"/>
					<h1 className='resumeTitle'>{resumeInfo.resumeTitle}</h1>
					<p className='personalInfo'>{resumeInfo.personalInfo}</p>
					<p className="currentState">{resumeInfo.currentState}</p>
                    <div className="buttons">
                        <NavLink className="indexPage button" to='/'>首页</NavLink>
                        <NavLink className="login button" onClick={this.logClick.bind(this)}>{login.is_login?'退出':'登录'}</NavLink>
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