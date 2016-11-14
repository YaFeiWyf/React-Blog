import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/Blogs';
import BlogItem from '../../components/BlogItem/BlogItem';
import fetch from 'isomorphic-fetch';
import ListSortContainer from '../ListSortContainer/ListSortContainer';
/*import ListAnim from '../ListAnim/ListAnim';
 import DetailSwitch from '../DetailSwitch/DetailSwitch';*/
import LoginDialog from '../../components/LoginDialog/LoginDialog';
require('./index.css');

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    fetchTest() {
        const {actions} = this.props;
        fetch('test.json', {
            method: 'GET'
        })
            .then(response=>response.json())
            .then(json=> {
                //console.log(JSON.stringify(json));
                console.log(json);
            })
            .catch(e=> {
                console.log(e);
            })
    }

    submitLoginInfo(values) {
        console.log('start send data');
        fetch('/login', {
            method: 'POST',
            mode: 'cors',
            Origin: '*',
            headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
                'Content-Type': 'application/json' // default: 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response=>response.json())
            .then(json=> {
                console.log(json);
            })
            .catch(e=> {
                console.log(JSON.stringify(e));
            });
    }

    componentWillMount() {
        let {actions, login} = this.props;
        actions.initBlogList(login.is_login);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps!=this.props){
            let {actions, login} = nextProps;
            if(this.props.login.is_login!=login.is_login){
                actions.initBlogList(login.is_login);
            }
        }
    }

    fetchBlogContent(blogId) {
        let {actions} = this.props;
        actions.initBlogContent(blogId);
    }

    render() {
        const {blogs, actions, login} = this.props;
        let blogItems = [];
        let showEdit = false;
        if(login.is_login){
            showEdit = true;
        }
        blogs.map((blog, index)=>
            blogItems.push(
                <BlogItem key={index} blogData={blog} showEdit={showEdit} loadBlogData={actions.initBlogContent}/>
            )
        );

        return (
            <div className="blogsContainer container">
                <ul>
                    {blogItems}
                </ul>
                {/*<ListSortContainer/>*/}
                {/*<LoginDialog onLogin={this.submitLoginInfo.bind(this)}/>*/}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs.blogs,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

