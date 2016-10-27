import { INIT_BLOG_LIST_SUCCESS,INIT_BLOG_LIST_FAIL, SHOW_BLOG_CONTENT, ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';
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

export function initBlogList(){
	return (dispatch)=>{
		fetch('/bloglist',{
			method:'GET',
			mode:'cors',
			Origin:'*',
            headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
                'Content-Type': 'application/json' // default: 'application/json'
            }
		})
			.then(response=>response.json())
			.then(json=>{
				if(json.is_success){
					dispatch(initBlogListSuccess(json.blogs));
				}else {
					dispatch(initBlogListFail())
				}
			})
			.catch(e=>console.log(e));
	}
}

export function initBlogContent(blogId) {
    return (dispatch)=>{
        fetch('/blog',{
            method:'POST',
            mode: 'cors',
            Origin: '*',
            headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
                'Content-Type': 'application/json' // default: 'application/json'
            },
            body:JSON.stringify({
                blogId:blogId
            })
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.is_success){
                    console.log(JSON.stringify(json));
                    dispatch(showBlogContent(json.blogContent));
                }
            })
            .catch(e=>{
                console.log(e);
            })
    }
}

export function initBlogListSuccess(blogs) {
    return {
        type:INIT_BLOG_LIST_SUCCESS,
        blogs
    }
}

export function initBlogListFail() {
    return {
        type:INIT_BLOG_LIST_FAIL
    }
}

export function showBlogContent(content) {
    return {
        type:SHOW_BLOG_CONTENT,
        content
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
