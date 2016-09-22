import { ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';

export function addBlog(blog){
	return {
		type:ADD_BLOG,
		blog
	};
}

export function deleteBlog(blog){
	return {
		type:DELETE_BLOG,
		blog
	};
}
