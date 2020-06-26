import React from 'react';

interface IVariableInputProps {
    selection: string;
    onSelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectionKeypress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class VariableInput extends React.Component<IVariableInputProps> {
    private input: HTMLInputElement | null = null;

    public getInstance() {
        return this.input!;
    }

    render() {
        return (
            <input
                type="selection"
                placeholder={'---Select a Variable in the Editor---'}
                value={this.props.selection}
                onChange={this.props.onSelectionChange}
                onKeyPress={this.props.onSelectionKeypress}
                ref={(ref) => (this.input = ref)}
            />
        );
    }
}

export default VariableInput;
