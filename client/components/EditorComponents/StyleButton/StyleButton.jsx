import React, {Component} from 'react';
require('./index.css');

export default class StyleButton extends Component {
    constructor(props) {
        super(props);
        this.onToggle = (e)=>{
            const {onToggle, style} = this.props;
            e.preventDefault();
            onToggle(style);
        }
    }

    render() {
        const {label, active} = this.props;
        let className= 'RichEditor-styleButton';
        if(active) {
            className += ' RichEditor-activeButton';
        }
        return (
            <span className={className} onMouseDown={this.onToggle}>
                {label}
            </span>
        );
    }
}