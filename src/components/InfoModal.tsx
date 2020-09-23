import React from 'react';

interface IInfoModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

/**
 * InfoModal:
 * Modal for the help text
 */
class InfoModal extends React.Component<IInfoModalProps> {
    private data: string | null = null;

    setData(data: string) {
        this.data = data;
    }

    render() {
        return (
            <div
                id="InfoModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-background">
                    <span className="close">&times;</span>
                    <h3 className="modal-header">Info - CURRENT NODE</h3>
                    <div className="modal-content-container">
                        <pre className="modal-content">{this.data}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoModal;
