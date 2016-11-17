/**
 * Created by wyf on 2016/11/14.
 */
export function dateFormat(dateString){
    var date = new Date(dateString);
    var dateStr = '';
    var year = date.getFullYear();
    var month = preFixZeoo(date.getMonth()+1);
    var day = preFixZeoo(date.getDate()+1);
    dateStr = `${year}年 ${month}月 ${day}日`;
    return dateStr;
}

function preFixZeoo(number) {
    if(number<10){
        return '0'+number.toString();
    }else {
        return number.toString();
    }
}

export function isEmptyObject(e) {
    var t;
    for (t in e){
        return !1;
    }
    return !0
}

export function formatComments(comments) {
    let newComments = [];
    for(let comment of comments){
        if(comment['parentId']==''){
            newComments.push(comment);
        }else {
            let parentComment = comments.filter(c=>c['_id']==comment['parentId'])[0];
            parentComment['children'] = parentComment['children'] || [];
            parentComment['children'].push(comment);
            sortComments(parentComment['children']);
        }
    }
    return sortComments(newComments);
}

function sortComments(comments) {
    return comments.sort(function (commentA, commentB) {
        return new Date(commentA['commentTime']).getTime()-new Date(commentB['commentTime']).getTime();
    });
}