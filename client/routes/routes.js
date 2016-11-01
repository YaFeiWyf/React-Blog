import React from 'react';
import { render } from 'react-dom';
import Blog from '../containers/Blog/Blog';
import Resume from '../containers/Resume/Resume';
import BlogContent from '../containers/BlogContent/BlogContent';
import LoginDialog from '../components/LoginDialog/LoginDialog';
import AdminManage from '../containers/AdminManage/AdminManage';
import {Router, Route, IndexRoute, Redirect} from 'react-router';

/*module.exports=(
	//主页
	<Route path='/' component={Resume}>
		{/!*默认页*!/}
		<IndexRoute component={Blog}/>
		<Route path='/blog' component={BlogContent}/>
		<Route path='/blog/:id' component={BlogContent}/>
		<Route path='/login' component={LoginDialog}/>
        <Route path='/admin' component={AdminManage}/>
		{/!* 其他重定向到 404 *!/}
        <Redirect from='*' to='/404' />
	</Route>
);*/

const rootRoute = {
    path: '/',

    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./blog/index'),
                require('./admin/index'),
                require('./login/index')
            ])
        })
    },

/*    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../containers/Resume/Resume'),
            })
        })
    },*/

    component: require('../containers/Resume/Resume'),

    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../containers/Blog/Blog.jsx'))
        })
    }
};

/*const rootRoute = {
	path: '/',
	indexRoute: {
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('../containers/Blog/Blog.jsx')).default
			}, 'Blog')
		},
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('../containers/Resume/Resume.jsx')).default
		}, 'Resume')
	},
	childRoutes: [
		require('./routes/baidu'),
		require('./routes/404'),
		require('./routes/redirect')
	]
};

module.exports = rootRoute;*/
