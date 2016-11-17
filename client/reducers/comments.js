import { ADD_COMMENT, DELETE_COMMENT, INIT_COMMENT_LIST_SUCCESS, LIKE_RESULT } from '../constants/CommentActions';

function initCommentListSuccess(state, comments){
    return Object.assign({},state, {comments:comments});
}

function addComment(state, comment) {
    let comments = state['comments'];
    let newComments = [...comments, comment];
    return Object.assign({},state, {comments:newComments});
}

function deleteComment(state, commentId) {
    let comments = state['comments'];
    let newComments = comments.filter(comment=>comment['_id']!=commentId);
    return Object.assign({}, state, {comments:newComments});
}

function likeCommentSuccess(state, likeResult) {
    let comments = state['comments'];
    let newComments = comments.map(comment=>{
        if(comment['_id']==likeResult['commentId']){
            comment['agree'] = likeResult['agree'];
            comment['disagree'] = likeResult['disagree'];
        }
        return comment;
    });
    return Object.assign({}, state, {comments:newComments});
}

export default function comments (state = {comments:[]}, action){
	switch(action.type){
        case INIT_COMMENT_LIST_SUCCESS:
            return initCommentListSuccess(state, action['comments']);
		case ADD_COMMENT:
			return addComment(state, action['comment']);
		case DELETE_COMMENT:
			return deleteComment(state, action['commentId']);
        case LIKE_RESULT:
            return likeCommentSuccess(state, action['likeResult']);
		default:
			return state;
	}
}