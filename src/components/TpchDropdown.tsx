import React from 'react';

interface ITpchDropdownProps {
    index: number;
    size: number;
    onDropdownChange: (index: number) => void;
}

/**
 * TpchDropdown:
 * Dropdown for the TPC-H queries
 */
class TpchDropdown extends React.Component<ITpchDropdownProps> {
    constructor(props: ITpchDropdownProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({ index });
        this.props.onDropdownChange(index);
    }

    nextItem() {
        let index = this.props.index < this.props.size - 1 ? this.props.index + 1 : 0;
        this.setState({ index });
        this.props.onDropdownChange(index);
    }

    prevItem() {
        let index = this.props.index > 0 ? this.props.index - 1 : this.props.size - 1;
        this.setState({ index });
        this.props.onDropdownChange(index);
    }

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
            <select id="tpchDropdown" className="dropdown" value={this.props.index} onChange={this.onChange}>
                {this.renderOptions()}
            </select>
        );
    }
}

export default TpchDropdown;
