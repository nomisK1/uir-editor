import React from 'react';

export enum Status {
    COMMENT = 'ADD COMMENT',
    NODE = 'CURRENT NODE',
    RENAME = 'RENAME NODE',
    SEARCH = 'SEARCH NODE',
}

interface IStatusInputProps {
    input: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeydown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

interface IStatusInputState {
    status: Status;
    line: number;
    column: number;
}

/**
 * StatusInput:
 * Input field and status display
 */
class StatusInput extends React.Component<IStatusInputProps, IStatusInputState> {
    private inputElement: HTMLInputElement | null = null;

    constructor(props: IStatusInputProps) {
        super(props);
        this.state = {
            status: Status.NODE,
            line: 1,
            column: 1,
        };
    }

    getInstance() {
        return this.inputElement!;
    }

    getStatus() {
        return this.state.status;
    }

    setStatus(status: Status) {
        this.setState({ status });
    }

    resetStatus(position?: { line: number; column: number }) {
        this.setState({
            status: Status.NODE,
            line: position ? position.line : this.state.line,
            column: position ? position.column : this.state.column,
        });
    }

    render() {
        return (
            <div className="statusInput">
                <input
                    id="sDisplay"
                    className="input"
                    value={
                        this.state.status === Status.NODE
                            ? '[' + this.state.line + '/' + this.state.column + ']'
                            : this.state.status
                    }
                    readOnly={true}
                    style={getStatusStyle(this.state.status)}
                />
                <input
                    id="sInput"
                    className="input"
                    value={this.props.input}
                    placeholder={'----- EMPTY -----'}
                    onClick={() => this.setState({ status: Status.SEARCH })}
                    onChange={this.props.onInputChange}
                    onKeyDown={this.props.onInputKeydown}
                    ref={(ref) => (this.inputElement = ref)}
                />
            </div>
        );
    }
}

export default StatusInput;

function getStatusStyle(status: Status) {
    if (status === Status.COMMENT) return { backgroundColor: 'rgb(0, 255, 0, 0.4)' };
    if (status === Status.RENAME) return { backgroundColor: 'rgb(255, 0, 0, 0.4)' };
    if (status === Status.SEARCH) return { backgroundColor: 'rgb(0, 0, 255, 0.4)' };
    else return { backgroundColor: 'rgb(160, 160, 160, 0.4)' };
}
