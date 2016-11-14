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