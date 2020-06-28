import React from 'react';

interface IVariableInputProps {
    selection: string;
    onSelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectionKeydown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
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
                onKeyDown={this.props.onSelectionKeydown}
                ref={(ref) => (this.input = ref)}
            />
        );
    }
}

export default VariableInput;
