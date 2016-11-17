import { combineReducers } from 'redux';
import blogs from './blogs';
import resume from './resume';
import login from './login';
import comments from './comments';

const rootReducer = combineReducers({
	blogs,
	resume,
	login,
    comments
});
export default rootReducer;