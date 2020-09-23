import React from 'react';

interface IExplanationModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

/**
 * ExplanationModal:
 * Modal for the explanation text
 */
class ExplanationModal extends React.Component<IExplanationModalProps> {
    render() {
        return (
            <div
                id="ExplanationModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-background">
                    <span className="close">&times;</span>
                    <h3 className="modal-header">Explanation for "{}" operation</h3>
                    <div className="modal-content-container">
                        <text className="modal-content">Hello World!</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExplanationModal;
