import React from 'react';
import { render } from 'react-dom';
import Blog from '../containers/Blog/Blog';
import Resume from '../containers/Resume/Resume';
import {Router, Route, IndexRoute, Redirect} from 'react-router';

module.exports=(
	//主页
	<Route path='/' component={Blog}>
		//默认页
		<IndexRoute component={Blog}/>
		<Route path='/blog/:id' component={Blog}/>
		{/* 其他重定向到 404 */}
        <Redirect from='*' to='/404' />
	</Route>
);