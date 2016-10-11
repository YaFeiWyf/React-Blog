import React from 'react';
import { render } from 'react-dom';
import Blog from '../containers/Blog/Blog';
import Resume from '../containers/Resume/Resume';
import {Router, Route} from 'react-router';

module.exports=(
	<Route>
		<Route path='/' compnent={Blog}/>
		<Route path='/blog/:id' component={Resume}/>
	</Route>
);