import React from 'react';

export enum Status {
    COMMENT = 'ADD COMMENT',
    NODE = 'CURRENT NODE',
    RENAME = 'RENAME VARIABLE',
    SEARCH = 'SEARCH VARIABLE',
}

interface IStatusInputProps {
    input: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeydown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class StatusInput extends React.Component<IStatusInputProps> {
    private inputElement: HTMLInputElement | null = null;
    private status: Status = Status.NODE;

    getInstance() {
        return this.inputElement!;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status: Status) {
        this.status = status;
        this.forceUpdate();
    }

    render() {
        return (
            <div className="statusInput">
                <input id="sDisplay" className="input" value={this.status} readOnly={true} />
                <input
                    id="sInput"
                    className="input"
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
