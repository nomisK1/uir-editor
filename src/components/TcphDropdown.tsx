import React from 'react';

interface ITcphDropdownProps {
    data: string[];
    selected: string;
    onDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

class TcphDropdown extends React.Component<ITcphDropdownProps> {
    constructor(props: ITcphDropdownProps) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    public renderOptions() {
        return this.props.data.map((e, i) => {
            return (
                <option key={i} value={e}>
                    TCP-H {i + 1}
                </option>
            );
        });
    }

    render() {
        return (
            <label>
                <b>Query: </b>
                <select value={this.props.selected} onChange={this.props.onDropdownChange}>
                    {this.renderOptions()}
                </select>
                <br />
            </label>
        );
    }
}

export default TcphDropdown;
