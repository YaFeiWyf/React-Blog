import { ADD_BLOG } from '../constants/ActionTypes';
const initState = window.resumeInfo;

export default function resume (state = initState, action){
	switch(action.type){
		case ADD_BLOG:
			return state;
		default:
			return state;
	}
}