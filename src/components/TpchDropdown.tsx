import React from 'react';

interface ITpchDropdownProps {
    size: number;
    index: number;
    onDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * TpchDropdown:
 * Dropdown for the TPC-H queries
 */
class TpchDropdown extends React.Component<ITpchDropdownProps> {
    renderOptions() {
        let options: JSX.Element[] = [];
        for (let i = 0; i < this.props.size; i++)
            options.push(
                <option key={i} value={i}>
                    TPC-H {i + 1}
                </option>,
            );
        return options;
    }

    render() {
        return (
            <select
                id="tpchDropdown"
                className="dropdown"
                value={this.props.index}
                onChange={this.props.onDropdownChange}
            >
                {this.renderOptions()}
            </select>
        );
    }
}

export default TpchDropdown;
