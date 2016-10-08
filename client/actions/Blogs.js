import { ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';

export function fetchTest(){
	return (dispatch)=>{
		fetch('/test',{
			method:'POST',
			mode: 'cors',
            Origin: '*',
			body:JSON.stringify({
				name:'wangyafei',
				content:'前台post数据'
			})
		})
		.then(response=>response.json())
		.then(json=>{
			console.log(JSON.stringify(json));
			dispatch(addBlog(json));
		})
		.catch(e=>{
			console.log(e);
		})
	}
}

export function addBlog(blog){
	return {
		type:ADD_BLOG,
		blog
	}
}

export function deleteBlog(blog){
	return {
		type:DELETE_BLOG,
		blog
	}
}
