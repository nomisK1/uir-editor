import React from 'react';

interface IVariableSelectorProps {
    selection: string;
    onSelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectionKeypress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class VariableSelector extends React.Component<IVariableSelectorProps> {

    render() {
        return (
            <input
                type="selection"
                placeholder={"---Search for a Variable in the Editor---"}
                value={this.props.selection}
                onChange={this.props.onSelectionChange}
                onKeyPress={this.props.onSelectionKeypress}
            />
        )
    }
}

export default VariableSelector;
