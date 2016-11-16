import { ADD_COMMENT, DELETE_COMMENT} from '../constants/CommentActions';
import fetch from 'isomorphic-fetch';

export function saveComment(blogData,callback){
    return (dispatch)=>{
        fetch('/comment',{
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

export function deleteComment(blogId, count) {
    return (dispatch)=>{
        fetch('/comment',{
            method:'DELETE',
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
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
    }
}

export function addCommentSuccess(blogs) {
    return {
        type:ADD_COMMENT,
        blogs
    }
}

export function deleteCommentSuccess(blog){
	return {
		type:DELETE_COMMENT,
		blog
	}
}

