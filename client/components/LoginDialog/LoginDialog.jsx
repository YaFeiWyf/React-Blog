import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import * as Actions from '../../actions/Login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const FormItem = Form.Item;
import {browserHistory} from 'react-router';
require ('./index.css');

let LoginForm = React.createClass({

    handleSubmit(e){
        "use strict";
        let {login, actions} = this.props;
        var values = this.props.form.getFieldsValue();
        e.preventDefault();
        console.log('React form of values:', values);
        if(!login.is_login){
            actions.login(values, ()=>{
                console.log('callback 成功');
                browserHistory.push('/admin');
            });
        }
    },

    render() {
        const {login, actions} = this.props;
        const {getFieldDecorator} = this.props.form;
        const formItemLayout={
            labelCol:{
                span:6
            },
            wrapperCol:{
                span:14
            }
        };

        return (
            <div className="dialogModel">
                <div className="loginWrapper">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="用户名：">
                            {
                                getFieldDecorator('userName')(<Input type='text' placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="密码：">
                            {
                                getFieldDecorator('pass')(<Input type='password' placeholder="请输入密码"/>)
                            }
                        </FormItem>
                        <FormItem wrapperCol={{span: 16, offset:6}} style={{marginTop:24}}>
                            <Button type="primary" htmlType='submit'>确定</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    },
});

let LoginDialog = Form.create()(LoginForm);

function mapStateToProps(state){
    return {
        login:state.login
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
