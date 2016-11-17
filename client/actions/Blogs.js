import { INIT_BLOG_LIST_SUCCESS,INIT_BLOG_LIST_FAIL, SHOW_BLOG_CONTENT, SAVE_BLOG_SUCCESS, DELETE_BLOG, SAVE_BLOG_COUNTER } from '../constants/ActionTypes';
import {initCommentListSuccess} from './Comments';
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

export function initBlogList(is_login=false){
	return (dispatch)=>{
		fetch('/bloglist?is_login='+is_login,{
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

export function initBlogContent(blogId,callback) {
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
                    //console.log(JSON.stringify(json.blogContent));
                    dispatch(showBlogContent(json.blog));
                    if(callback){
                        callback();
                    }
                }
            })
            .catch(e=>{
                console.log(e);
            })
    }
}

export function saveBlog(blogData,callback){
    return (dispatch)=>{
        fetch('/blog/save',{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(blogData)
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.save_success){
                    dispatch(saveBlogSuccess(json.blog));
                    callback();
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
    }
}

export function saveBlogCount(blogId, count) {
    return (dispatch)=>{
        fetch('/blog/saveCount',{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                blogId:blogId,
                count:count
            })
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.save_success){
                    dispatch(saveBlogCounterSuccess(json.blog));
                    dispatch(initCommentListSuccess(json.comments));
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
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

export function showBlogContent(blog) {
    return {
        type:SHOW_BLOG_CONTENT,
        blog
    }
}

export function saveBlogSuccess(blog){
	return {
		type:SAVE_BLOG_SUCCESS,
		blog
	}
}

export function deleteBlog(blog){
	return {
		type:DELETE_BLOG,
		blog
	}
}

export function saveBlogCounterSuccess(blog) {
    return {
        type:SAVE_BLOG_COUNTER,
        blog
    };
}
