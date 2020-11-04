import React from 'react';

interface IQuerySelectorProps {
    index: number;
    size: number;
    onSelectionChange: (index: number) => void;
}

/**
 * QuerySelector:
 * Selector for the UIR-Queries
 */
class QuerySelector extends React.Component<IQuerySelectorProps> {
    constructor(props: IQuerySelectorProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({ index });
        this.props.onSelectionChange(index);
    }

    nextItem() {
        let index = this.props.index < this.props.size - 1 ? this.props.index + 1 : 0;
        this.setState({ index });
        this.props.onSelectionChange(index);
    }

    prevItem() {
        let index = this.props.index > 0 ? this.props.index - 1 : this.props.size - 1;
        this.setState({ index });
        this.props.onSelectionChange(index);
    }

    renderOptions() {
        let options: JSX.Element[] = [];
        for (let i = 0; i < this.props.size; i++)
            options.push(
                <option key={i} value={i}>
                    {optionName} {i + 1}
                </option>,
            );
        return options;
    }

    render() {
        return (
            <select className="querySelector" value={this.props.index} onChange={this.onChange}>
                {this.renderOptions()}
            </select>
        );
    }
}

export default QuerySelector;

const optionName = 'UIR-Query';
