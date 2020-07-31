import React from 'react';

export enum Status {
    COMMENT = 'Add Comment',
    RENAME = 'Rename Variable',
    SEARCH = 'Search Variable',
}

interface IStatusInputProps {
    input: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeydown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class StatusInput extends React.Component<IStatusInputProps> {
    private inputElement: HTMLInputElement | null = null;
    private status: Status = Status.SEARCH;

    public getInstance() {
        return this.inputElement!;
    }

    public getStatus() {
        return this.status;
    }

    public setStatus(status: Status) {
        this.status = status;
    }

    render() {
        return (
            <input
                id="statusInput"
                className="input"
                placeholder={this.status}
                value={this.props.input}
                onChange={this.props.onInputChange}
                onKeyDown={this.props.onInputKeydown}
                ref={(ref) => (this.inputElement = ref)}
            />
        );
    }
}

export default StatusInput;
