import React, { Component } from 'react';
import routes from '../routes/routes';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

export default class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router routes={routes} history={hashHistory}/>
		);
	}
}
