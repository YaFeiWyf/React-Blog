import React, { Component } from 'react';
import rootRoute from '../routes/routes';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

export default class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router routes={rootRoute} history={browserHistory}/>
		);
	}
}
