import React from 'react';

interface IFeatureCheckerProps {
    features: string[];
    onCheckerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class FeatureChecker extends React.Component<IFeatureCheckerProps> {

    renderOptions() {
        return this.props.features.map((e, i) => {
            return (
                <div key={i}>
                    <input type="checkbox" id={e} name={e} onChange={this.props.onCheckerChange}></input>
                    <label>{e}</label>
                </div>
            );
        });
    }

    render() {
        return (
            <label>
                {this.renderOptions()}
            </label>)
    }
}

export default FeatureChecker;
