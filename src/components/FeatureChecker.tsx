import React from 'react';

interface IFeatureCheckerProps {
    features: string[];
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
    activateCommentDecoration: boolean;
    onCheckerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class FeatureChecker extends React.Component<IFeatureCheckerProps> {
    renderOptions() {
        let featureIsActive = [
            this.props.activateNodeHighlighting,
            this.props.activateVariableDecoration,
            this.props.activateChildDecoration,
            this.props.activateParentDecoration,
            this.props.activateCommentDecoration,
        ];
        return this.props.features.map((e, i) => {
            return (
                <label key={i} form={e}>
                    <input
                        type="checkbox"
                        id={e}
                        name={e}
                        value={e}
                        checked={featureIsActive[i]}
                        onChange={this.props.onCheckerChange}
                    ></input>
                    {e}
                    <br />
                </label>
            );
        });
    }

    render() {
        return <label>{this.renderOptions()}</label>;
    }
}

export default FeatureChecker;
