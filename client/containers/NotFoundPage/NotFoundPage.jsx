import React, {Component} from 'react';
require('./index.css');

export default class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notFoundPage">
                页面被外星人劫持啦。。。  ：(
            </div>
        );
    }
}