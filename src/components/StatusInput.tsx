import React from 'react';

enum Status {
    //TODO
    ADDCOMMENT = '---Select a Variable in the Editor---',
    RENAMEVARIABLE = '---Select a Variable in the Editor---',
    SEARCHVARIABLE = '---Select a Variable in the Editor---',
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
            <div className="StatusInput">
                <label>Current Status: {Status.SEARCHVARIABLE}</label>
                <input
                    placeholder={Status.SEARCHVARIABLE}
                    value={this.props.input}
                    onChange={this.props.onInputChange}
                    onKeyDown={this.props.onInputKeydown}
                    ref={(ref) => (this.inputElement = ref)}
                />
            </div>
        );
    }
}

export default StatusInput;
