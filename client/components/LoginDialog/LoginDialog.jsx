import React, {Component} from 'react';
import {Form, Input, Button } from 'antd';
const FormItem = Form.Item;
require ('./index.css');

let LoginForm = React.createClass({

    handleSubmit(e){
        "use strict";
        let {onLogin} = this.props;
        var values = this.props.form.getFieldsValue()
        e.preventDefault();
        console.log('React form of values:', values);
        onLogin(values);
    },

    render() {
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
export default LoginDialog;
