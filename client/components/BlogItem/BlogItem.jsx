import React, { Component } from 'react';
import NavLink from '../NavLink/NavLink';
require ('./index.css');

export default class BlogItem extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const { blogData } = this.props;
		return (
			<NavLink to={'/blog/'+blogData.id}>
				<li className='blogItem'>
					<h1>{blogData.title}</h1>
					<p className='blogContent'>{blogData.content}</p>
					<p className='blogInfo'>{blogData.publishDate} | {blogData.author}</p>
				</li>
			</NavLink>
		);
	}
}