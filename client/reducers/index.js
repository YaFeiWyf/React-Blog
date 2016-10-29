import { combineReducers } from 'redux';
import blogs from './blogs';
import resume from './resume';
import login from './login';

const rootReducer = combineReducers({
	blogs,
	resume,
	login
});
export default rootReducer;