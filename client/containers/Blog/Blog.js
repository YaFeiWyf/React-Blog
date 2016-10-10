import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Blogs';
import BlogItem from '../../components/BlogItem/BlogItem';
import fetch from 'isomorphic-fetch';
import ListSortContainer from '../ListSortContainer/ListSortContainer';
import ListAnim from '../ListAnim/ListAnim';
import DetailSwitch from '../DetailSwitch/DetailSwitch';
require ('./index.css');

class Blog extends Component {
	constructor(props){
		super(props);
	}

	fetchTest(){
		const { actions } = this.props;
		fetch('test.json',{
			method:'GET'
		})
		.then(response=>response.json())
		.then(json=>{
			//console.log(JSON.stringify(json));
			actions.addBlog(json);
		})
		.catch(e=>{
			console.log(e);
		})	
	}

	render(){
		const { blogs, actions } = this.props;
		let blogItems = [];
		blogs.map((blog, index)=>blogItems.push(<BlogItem key={index} blogData={blog} />));
		return (
			<div className="blogsContainer">
				<div onClick={()=>actions.fetchTest()}>新增博客</div>
				<ul>
					{blogItems}
				</ul>
				<ListSortContainer/>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs.blogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

