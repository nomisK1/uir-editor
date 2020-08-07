import React from 'react';
import TTVisual from './TTVisual';
import { treeData } from '../content/TargetTree';

interface ITargetTreeModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

class TargetTreeModal extends React.Component<ITargetTreeModalProps> {
    private data: treeData | null = null;

    setData(data: treeData | null) {
        this.data = data;
    }

    visualizeData() {
        if (this.data)
            return (
                <div>
                    <h3 className="modalHeader">
                        {this.data.context} // {this.data.nodes[0].label}
                    </h3>
                    <TTVisual data={this.data} />
                </div>
            );
    }

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
                    {this.visualizeData()}
                </div>
            </div>
        );
    }
}

export default TargetTreeModal;
