import { ADD_BLOG } from '../constants/ActionTypes';
const initState = {
	resumeTitle:`Yvan wang`,
	personalInfo:'我是一个 20 岁的 homeschooler，爱好旅行以及一切富有创造性的事物，尤其是摄影、设计和编程。这个世界就是我的学校。学自己之所想所爱。自由的身心定能使我成为一个一直朝前行走的行者。',
	currentState: '四达时代集团，前端开发工程师'
};

export default function resume (state = initState, action){
	switch(action.type){
		case ADD_BLOG:
			return state;
		default:
			return state;
	}
}