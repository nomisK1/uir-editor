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
        this.header = data[0].length > maxHeader ? data[0].slice(0, maxHeader) + '[...]' : data[0];
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
                <div className="modalBackground">
                    <span className="close">&times;</span>
                    <h3 className="modalHeader">{this.header}</h3>
                    <div className="modalContent">
                        <span>{this.content}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoModal;

// Maximum amount of characters in the header string
const maxHeader = 100;
