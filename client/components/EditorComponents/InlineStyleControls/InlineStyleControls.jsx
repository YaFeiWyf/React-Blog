import React, {Component} from 'react';
import StyleButton from '../StyleButton/StyleButton';
require('./index.css');

var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'}
];

export default class InlineStyleControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {editorState, onToggle} = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        return (
            <div className="RichEditor-controls last-control">
                {
                    INLINE_STYLES.map((type)=>
                        <StyleButton
                            key={type.label}
                            label={type.label}
                            style={type.style}
                            active={currentStyle.has(type.style)}
                            onToggle={onToggle}
                        />
                    )
                }
            </div>
        );
    }
}