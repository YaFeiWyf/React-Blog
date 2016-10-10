import { ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function fetchTest(){
	return (dispatch)=>{
		fetch('/test',{
			method:'POST',
			mode: 'cors',
            Origin: '*',
            headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
		        'Content-Type': 'application/json' // default: 'application/json'
		    },
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
