import { ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';

const initState = {
	blogs:[
		{
			id:1,
			title:'Workflow 实现签到应用客户端',
			author:'王亚飞',
			content:'Workflow 是 iOS 平台里一个扩展性极强的自动流程 app，可以自定义一系列复杂操作并把它们编排成脚本，之后便可一键快速执行。网上虽然流传着不少 Workflow 脚本，但大多都仅用于简化日常操作或者实现一些扩展功能而已，经过一段时间的体验，我发现它的潜力远远不止于此：只要有些编程基础，完全可以把它当作一个简单的可视化脚本编程工具来用。',
			publishDate:'2016-09-16'
		},
		{
			id:2,
			title:'Workflow 实现签到应用客户端',
			author:'王亚飞',
			content:'Workflow 是 iOS 平台里一个扩展性极强的自动流程 app，可以自定义一系列复杂操作并把它们编排成脚本，之后便可一键快速执行。网上虽然流传着不少 Workflow 脚本，但大多都仅用于简化日常操作或者实现一些扩展功能而已，经过一段时间的体验，我发现它的潜力远远不止于此：只要有些编程基础，完全可以把它当作一个简单的可视化脚本编程工具来用。',
			publishDate:'2016-09-16'
		},
		{
			id:3,
			title:'Workflow 实现签到应用客户端',
			author:'王亚飞',
			content:'Workflow 是 iOS 平台里一个扩展性极强的自动流程 app，可以自定义一系列复杂操作并把它们编排成脚本，之后便可一键快速执行。网上虽然流传着不少 Workflow 脚本，但大多都仅用于简化日常操作或者实现一些扩展功能而已，经过一段时间的体验，我发现它的潜力远远不止于此：只要有些编程基础，完全可以把它当作一个简单的可视化脚本编程工具来用。',
			publishDate:'2016-09-16'
		},
		{
			id:4,
			title:'Workflow 实现签到应用客户端',
			author:'王亚飞',
			content:'Workflow 是 iOS 平台里一个扩展性极强的自动流程 app，可以自定义一系列复杂操作并把它们编排成脚本，之后便可一键快速执行。网上虽然流传着不少 Workflow 脚本，但大多都仅用于简化日常操作或者实现一些扩展功能而已，经过一段时间的体验，我发现它的潜力远远不止于此：只要有些编程基础，完全可以把它当作一个简单的可视化脚本编程工具来用。',
			publishDate:'2016-09-16'
		}
	]
};

function addBlog(state, blog){
	let blogs = state['blogs'];
	let length = blogs.length;
	let newblog = Object.assign({}, blog, { id: length+1 });
	blogs = [...blogs, newblog];
	return Object.assign({}, state, {blogs: blogs});
}

function deleteBlog(state, blog){
	let blogs = state['blogs'];
	blogs = blogs.filter(blogItem=>blogItem['id']!=blog['id']);
	return Object.assign({}, state, {blogs: blogs});
}

export default function blogs(state=initState, action){
	switch(action.type){
		case ADD_BLOG:
			return addBlog(state, action['blog']);
		case DELETE_BLOG:
			return deleteBlog(state, action['blog']);
		default:
			return state;
	}
}
