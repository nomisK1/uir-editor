import React from 'react';

interface IKeybindModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

class KeybindModal extends React.Component<IKeybindModalProps> {
    render() {
        return (
            <div>
                <button id="keybindButton" className="button" onClick={this.props.onModalClick}>
                    Keybinds
                </button>
                <div id="keybindModal" className="modal" style={{ display: this.props.showModal ? 'block' : 'none' }}>
                    <div className="modal-content">
                        <span className="close" onClick={this.props.onModalClick}>
                            &times;
                        </span>
                        <img
                            id="keybindImage"
                            className="image"
                            src="shortcuts.png"
                            alt="Keybinds"
                            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default KeybindModal;
