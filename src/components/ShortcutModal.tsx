import React from 'react';

interface IShortcutModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

class ShortcutModal extends React.Component<IShortcutModalProps> {
    render() {
        return (
            <div
                id="shortcutModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <img
                        id="shortcutImage"
                        className="image"
                        src="shortcuts.png"
                        alt="SHORTCUTS"
                        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                    />
                </div>
            </div>
        );
    }
}

export default ShortcutModal;
