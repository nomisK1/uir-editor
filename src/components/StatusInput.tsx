import React from 'react';

enum Status {
    //TODO
    VARIABLEOCCURRENCE = '---Select a Variable in the Editor---',
}

interface IStatusInputProps {
    //status: string;
    input: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeydown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class StatusInput extends React.Component<IStatusInputProps> {
    private inputElement: HTMLInputElement | null = null;

    public getInstance() {
        return this.inputElement!;
    }

    render() {
        return (
            <label>
                Current Status: {Status.VARIABLEOCCURRENCE}
                <input
                    type="statusInput"
                    placeholder={Status.VARIABLEOCCURRENCE}
                    value={this.props.input}
                    onChange={this.props.onInputChange}
                    onKeyDown={this.props.onInputKeydown}
                    ref={(ref) => (this.inputElement = ref)}
                />
            </label>
        );
    }
}

export default StatusInput;
