import React from 'react';

interface IKeybindModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

/**
 * KeybindModal:
 * Modal for the keybind image
 */
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
                    <h3 className="modalHeader">KEYBINDS (UIR-Editor/public/keybinds.txt)</h3>
                    <div className="image-container">
                        <img className="image" src="img/keybinds.png" alt="KEYBINDS" />
                    </div>
                </div>
            </div>
        );
    }
}

export default KeybindModal;
