import React from 'react';

interface ITargetTreeModalProps {
    showModal: boolean;
    onModalClick: () => void;
    json: Object;
}

class TargetTreeModal extends React.Component<ITargetTreeModalProps> {
    render() {
        return (
            <div
                id="targetTreeModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <svg>
                        <circle cx="150" cy="77" r="40" />
                    </svg>
                </div>
            </div>
        );
    }
}

export default TargetTreeModal;
