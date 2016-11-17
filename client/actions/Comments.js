import { INIT_COMMENT_LIST_SUCCESS, ADD_COMMENT, DELETE_COMMENT, LIKE_RESULT} from '../constants/CommentActions';
import fetch from 'isomorphic-fetch';

export function saveComment(comment,callback){
    return (dispatch)=>{
        fetch('/comment',{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(comment)
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.is_success){
                    dispatch(addCommentSuccess(json.comment));
                    if(callback){
                        callback();
                    }
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
    }
}

export function deleteComment(commentId) {
    return (dispatch)=>{
        fetch('/comment',{
            method:'DELETE',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                commentId:commentId
            })
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.save_success){
                    dispatch(deleteCommentSuccess(commentId));
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
    }
}

export function likeComment(commentAction) {
    return (dispatch)=>{
        fetch('/comment/'+commentAction['commentId'],{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(commentAction)
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.is_success){
                    dispatch(likeCommentSuccess(json.likeResult));
                }else {
                    console.log('save fail');
                }
            })
            .catch(e=>console.log(e));
    }
}

export function initCommentListSuccess(comments) {
    return {
        type:INIT_COMMENT_LIST_SUCCESS,
        comments
    }
}

export function addCommentSuccess(comment) {
    return {
        type:ADD_COMMENT,
        comment
    }
}

export function deleteCommentSuccess(commentId){
	return {
		type:DELETE_COMMENT,
        commentId
	}
}

export function likeCommentSuccess(likeResult) {
    return {
        type:LIKE_RESULT,
        likeResult
    }
}

