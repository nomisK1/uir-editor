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
                    <img id="keybindImage" className="image" src="keybinds.png" alt="KEYBINDS" />
                </div>
            </div>
        );
    }
}

export default KeybindModal;
