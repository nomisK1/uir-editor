import React from 'react';

interface IFeatureCheckerProps {
    features: string[];
    onCheckerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class FeatureChecker extends React.Component<IFeatureCheckerProps> {
    constructor(props: IFeatureCheckerProps) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    public renderOptions() {
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
        return this.renderOptions();
    }
}

export default FeatureChecker;
