import { INIT_BLOG_LIST_SUCCESS,INIT_BLOG_LIST_FAIL, SHOW_BLOG_CONTENT, SAVE_BLOG_SUCCESS, DELETE_BLOG } from '../constants/ActionTypes';
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
                    //console.log(JSON.stringify(json.blogContent));
                    dispatch(showBlogContent(json.blogContent));
                }
            })
            .catch(e=>{
                console.log(e);
            })
    }
}

export function saveBlog(rowData,plaintext,callback){
    return (dispatch)=>{
        fetch('/blog/save',{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                rowData:rowData,
                plaintext:plaintext
            })
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
