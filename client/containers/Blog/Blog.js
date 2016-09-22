import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Blogs';
import BlogItem from '../../components/BlogItem/BlogItem';
require ('./index.css');

class Blog extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { blogs, actions } = this.props;
		let blogItems = [];
		blogs.map((blog, index)=>blogItems.push(<BlogItem key={index} blogData={blog} />));
		return (
			<div className="blogsContainer">
				<ul>
					{blogItems}
				</ul>
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

