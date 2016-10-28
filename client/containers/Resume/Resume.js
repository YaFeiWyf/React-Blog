'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Resume';
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

	back(e){
	    e.preventDefault();
        browserHistory.goBack();
    }

	render(){
		const { resumeInfo, actions } = this.props;
		return (
			<div className="rootContainer">
				<div className='resumeContianer'>
					<img src={imgSrc} alt="me"/>
					<h1 className='resumeTitle'>{resumeInfo.resumeTitle}</h1>
					<p className='personalInfo'>{resumeInfo.personalInfo}</p>
					<p className="currentState">{resumeInfo.currentState}</p>
					<NavLink className="indexPage" to='/'>首页</NavLink>
				</div>
				{this.props.children}
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		resumeInfo: state.resume
	};
}

function mapActionsToProps(dispatch){
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Resume);