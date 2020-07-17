import React from 'react';

interface ITcphDropdownProps {
    data: string[];
    query: string;
    onDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

class TcphDropdown extends React.Component<ITcphDropdownProps> {
    renderOptions() {
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
                <select value={this.props.query} onChange={this.props.onDropdownChange}>
                    {this.renderOptions()}
                </select>
                <br />
            </label>
        );
    }
}

export default TcphDropdown;
