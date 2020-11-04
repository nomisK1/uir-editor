import React from 'react';
import TTWrapper from '../../content/tree/TTWrapper';
import { treeData } from '../../content/tree/TargetTree';

interface ITargetTreeModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

/**
 * TargetTreeModal:
 * Modal for the TargetTree
 */
class TargetTreeModal extends React.Component<ITargetTreeModalProps> {
    private data: treeData | null = null;

    setData(data: treeData | null) {
        this.data = data;
    }

    render() {
        return (
            <div
                id="targetTreeModal"
                className="modal"
                style={{ display: this.props.showModal ? 'block' : 'none' }}
                onClick={this.props.onModalClick}
            >
                <div className="modalBackground">
                    <span className="close">&times;</span>
                    <h3 className="modalHeader">
                        {this.data ? this.data.context + ' // ' + this.data.json.id : 'HEADER'}
                    </h3>
                    <TTWrapper data={this.data} showTT={this.props.showModal} />
                </div>
            </div>
        );
    }
}

export default TargetTreeModal;
