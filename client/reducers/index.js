import { combineReducers } from 'redux';
import blogs from './blogs';
import resume from './resume';

const rootReducer = combineReducers({
	blogs,
	resume
});
export default rootReducer;