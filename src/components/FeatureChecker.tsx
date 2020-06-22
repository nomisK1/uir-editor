import React from 'react';

interface IFeatureCheckerProps {
    features: string[];
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
    onCheckerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class FeatureChecker extends React.Component<IFeatureCheckerProps> {
    renderOptions() {
        let featureIsActive = [
            this.props.activateNodeHighlighting,
            this.props.activateVariableDecoration,
            this.props.activateChildDecoration,
            this.props.activateParentDecoration,
        ];
        return this.props.features.map((e, i) => {
            return (
                <div key={i}>
                    <input
                        type="checkbox"
                        id={e}
                        name={e}
                        checked={featureIsActive[i]}
                        onChange={this.props.onCheckerChange}
                    ></input>
                    <label>{e}</label>
                </div>
            );
        });
    }

    render() {
        return <label>{this.renderOptions()}</label>;
    }
}

export default FeatureChecker;
