import React from 'react';

interface IHelpModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

/**
 * HelpModal:
 * Modal for the help text
 */
class HelpModal extends React.Component<IHelpModalProps> {
    private data: string | null = null;

    setData(data: string) {
        this.data = data;
    }

    render() {
        return (
            <div
                id="HelpModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-background">
                    <span className="close">&times;</span>
                    <h3 className="modal-header">Help - CURRENT NODE</h3>
                    <div className="modal-content-container">
                        <pre className="modal-content">{this.data}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default HelpModal;
