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
                    <img
                        id="keybindImage"
                        className="image"
                        src="keybinds.png"
                        alt="KEYBINDS"
                        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                    />
                </div>
            </div>
        );
    }
}

export default KeybindModal;
