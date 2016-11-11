import React, {Component} from 'react';
import Draft, {EditorState, RichUtils} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import EditorToolBar from '../EditorComponents/EditorToolBar/EditorToolBar';
import {browserHistory} from 'react-router';
require('./index.css');
require('./Draft.css');
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
const richButtonsPlugin = createRichButtonsPlugin();

function getBlockStyle(contentBlock){
    const blockType = contentBlock.getType();
    if(blockType==='blockquote'){
        return 'superFancyBlockquote';
    }
}

const styleMap={
    'CODE':{
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

export default class ContentEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = (command)=>this._handleKeyCommand(command);
        this.changeFontStyle = ()=>this._changeFontStyle();
        this.toggleBlockType = (type)=>this._toggleBlockType(type);
        this.toggleInlineStyle = (style)=>this._toggleInlineStyle(style);
        this.focus = ()=>this.refs.editor.focus();
        this.saveBlog = (id, contentState, plaintext)=>this._saveBlog(id, contentState, plaintext);
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _changeFontStyle(){
        console.log('font');
    }

    _toggleBlockType(blockType){
        const {editorState} = this.state;
        this.onChange(RichUtils.toggleBlockType(editorState,blockType));
    }

    _toggleInlineStyle(inlineStyle){
        const {editorState} = this.state;
        this.onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }

    _saveBlog(id, rowData, plaintext){
        const {saveBlog} = this.props;
        saveBlog(id, rowData , plaintext, ()=>{
            console.log('跳转首页');
            browserHistory.push('/');
        });
    }

    componentWillMount(){
        let {editData} = this.props;
        if(editData){
            this.setState({editorState:EditorState.createWithContent(Draft.convertFromRaw(editData['content']))});
        }
    }

    render() {
        const {editorState} = this.state;
        const {editData} = this.props;
        let id=null;
        const onToggle = {
            changeFontStyle:this.changeFontStyle,
            toggleBlockType:this.toggleBlockType,
            toggleInlineStyle:this.toggleInlineStyle
        };
        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        var rowData = Draft.convertToRaw(contentState);
        var plaintext = contentState.getPlainText();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className = `${className}+' RichEditor-hidePlaceholder'`;
            }
        }
        if(editData){
            id=editData['_id'];
        }


        return (
            <div className="contentEditor RichEditor-root">
                <EditorToolBar editorState={editorState} {...onToggle}/>
                <div className={className} onClick={this.focus}>
                    <Editor
                        ref="editor"
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        placeholder="Tell a story..."
                        spellCheck={true}
                        plugins={[richButtonsPlugin]}
                    />
                </div>
                <div className="bottomBar">
                    <span className="saveButton" onClick={()=>this.saveBlog(id,rowData,plaintext)}>保存</span>
                </div>
            </div>
        );
    }
}