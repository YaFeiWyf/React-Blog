'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Resume';
require ('./index.css');

class Resume extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { resumeInfo, actions } = this.props;
		return (
			<div className='resumeContianer'>
				<h1 className='resumeTitle'>{resumeInfo.resumeTitle}</h1>
				<p className='personalInfo'>{resumeInfo.personalInfo}</p>
				<p className="currentState">{resumeInfo.currentState}</p>
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