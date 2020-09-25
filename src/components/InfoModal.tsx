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
    private header: string | null = null;
    private content: string | null = null;

    setData(data: string[]) {
        this.header = data[0];
        this.content = data.slice(1).join('\n');
    }

    render() {
        return (
            <div
                id="infoModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modal-background">
                    <span className="close">&times;</span>
                    <h3 className="modal-header">{this.header}</h3>
                    <div className="modal-content">
                        <text>{this.content}</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoModal;
