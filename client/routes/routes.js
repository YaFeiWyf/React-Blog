import React from 'react';
import { render } from 'react-dom';
import Blog from '../containers/Blog/Blog';
import Resume from '../containers/Resume/Resume';
import {Router, Route, IndexRoute, Redirect} from 'react-router';

/*module.exports=(
	//主页
	<Route path='/' component={Blog}>
		//默认页
		<IndexRoute component={Blog}/>
		<Route path='/blog/:id' component={Blog}/>
		{/!* 其他重定向到 404 *!/}
        <Redirect from='*' to='/404' />
	</Route>
);*/

const rootRoute = {
	path: '/',
	indexRoute: {
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('components/layer/HomePage'))
			}, 'HomePage')
		},
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('components/Main'))
		}, 'Main')
	},
	childRoutes: [
		require('./routes/baidu'),
		require('./routes/404'),
		require('./routes/redirect')
	]
};

module.exports = rootRoute;