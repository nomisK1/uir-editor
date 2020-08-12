import React from 'react';

interface IKeybindModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

class KeybindModal extends React.Component<IKeybindModalProps> {
    render() {
        return (
            <div
                id="keybindModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <h3 className="modalHeader">KEYBINDS</h3>
                    <div className="pre-wrapper">
                        <pre>
                            {`
                            Navigation:

                                left-Arrow | h  : left
                                up-Arrow | j    : up
                                down-Arrow | k  : down
                                right-Arrow | l : right
                                
                                shift + (left-Arrow | h)  : cycleChildren
                                shift + (up-Arrow | j)    : jumpChild
                                shift + (down-Arrow | k)  : jumpParent
                                shift + (right-Arrow | l) : cycleParents
                            
                                m                    : moveRight
                                shift + m            : moveLeft 
                                Enter | n            : jumpNextOccurrence
                                shift + (Enter | n)  : jumpPrevOccurrence
                                (shift +)? z         : jumpBack
                                Backspace | US-Slash : searchVariable
                            
                            
                            Features:
                            
                                b               : addBookmark
                                shift + b       : revealBookmark
                                shift + alt + b : removeBookmark
                            
                                c               : addComment
                                shift + c       : removeComment
                                shift + alt + c : resetAllComments
                            
                                r               : renameVariable
                                shift + r       : unnameVariable
                                shift + alt + r : resetAllNames
                            
                                alt + 1 : foldAll
                                alt + 2 : foldBlocks
                                alt + 3 : unfoldAll
                            
                                s (+ CursorInsideBlock) : showTargetTree
                                shift + s               : showKeyboardShortcuts
                            
                            
                            Editor:
                            
                                q         : nextTCPH
                                shift + q : prevTCPH
                                tab       : toggleAllKeybinds
                                
                                ctrl + 1 : toggleNodeHighlighting
                                ctrl + 2 : toggleVariableDecorating
                                ctrl + 3 : toggleChildDecorating
                                ctrl + 4 : toggleParentDecorating
                                ctrl + 5 : toggleBookmarkDisplay
                                ctrl + 6 : toggleCommentDisplay
                                ctrl + 7 : toggleTargetTreeHover`}
                        </pre>
                    </div>
                    {/* <img id="keybindImage" className="image" src="keybinds.png" alt="KEYBINDS" /> */}
                </div>
            </div>
        );
    }
}

export default KeybindModal;
