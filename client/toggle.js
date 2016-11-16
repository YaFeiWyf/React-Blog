/**
 * Created by wyf on 2016/11/16.
 */
var currentHost = window.location.href;
var sunnyhuanPage = 'http://sunnyhuan.yvanwang.com/';   //'http://localhost:3000/'
console.log(currentHost==sunnyhuanPage);
if(currentHost==sunnyhuanPage){
    var huanStyle = document.createElement('link');
    huanStyle.rel = "stylesheet";
    huanStyle.href = '/huanStyle.css';
    document.head.appendChild(huanStyle);
    window.resumeInfo = {
        resumeTitle:`Li Huan`,
        personalInfo:`我是一名交互设计师，爱好旅游和写作。`,
        currentState: '北京科技大学，设计艺术学硕士',
        page: 'huan'
    };
}else {
    window.resumeInfo = {
        resumeTitle:`Yvan wang`,
        personalInfo:`我是一名前端开发攻城狮，学设计出身，最后发现还是更喜欢写代码。喜欢新技术，喜欢分享，这里是我的`,
        currentState: '四达时代集团，前端开发工程师',
        page: 'fei'
    };
}