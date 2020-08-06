import React from 'react';

interface ITargetTreeModalProps {
    showModal: boolean;
    onModalClick: () => void;
}

class TargetTreeModal extends React.Component<ITargetTreeModalProps> {
    private json: Object | null = null;

    setJson(json: Object | null) {
        this.json = json;
    }

    renderJson() {
        if (!this.json) return <div>NO TARGET</div>;
        return <div>{this.json}</div>;
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
                    <svg>
                        <circle cx="150" cy="77" r="40" />
                    </svg>
                    {this.renderJson()}
                </div>
            </div>
        );
    }
}

export default TargetTreeModal;
