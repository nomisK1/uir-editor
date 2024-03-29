import React from 'react';

export enum Status {
    COMMENT = 'ADD COMMENT',
    NOTE = 'ADD NOTE',
    POSITION = 'POSITION',
    RENAME = 'RENAME NODE',
    SEARCH = 'SEARCH NODE',
}

interface IStatusInputProps {
    onInputKeydown: (status: Status, input: string) => void;
}

interface IStatusInputState {
    status: Status;
    input: string;
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
            status: Status.POSITION,
            input: '',
            line: 1,
            column: 1,
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    getInstance() {
        return this.inputElement!;
    }

    getStatus() {
        return this.state.status;
    }

    setStatusComment(input: string) {
        this.setState({ status: Status.COMMENT, input });
    }

    setStatusNote(input: string) {
        this.setState({ status: Status.NOTE, input });
    }

    setStatusRename(input: string) {
        this.setState({ status: Status.RENAME, input });
    }

    setStatusSearch() {
        this.setState({ status: Status.SEARCH, input: '' });
    }

    update(input: string, line: number, column: number) {
        this.setState({ status: Status.POSITION, input, line, column });
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ input: event.target.value });
    }

    onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter' || event.key === 'Tab') {
            event.preventDefault();
            this.props.onInputKeydown(this.state.status, this.state.input);
        }
    }

    render() {
        return (
            <div className="statusInput">
                <input
                    id="sDisplay"
                    className="input"
                    value={getStatusValue(this.state.status, this.state.line, this.state.column)}
                    style={getStatusStyle(this.state.status)}
                    onKeyDown={this.onKeyDown}
                    readOnly={true}
                />
                <input
                    id="sInput"
                    className="input"
                    placeholder={'----- EMPTY -----'}
                    value={this.state.input}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    //onClick={() => this.setState({ status: Status.SEARCH })}
                    readOnly={this.state.status === Status.POSITION}
                    ref={(ref) => (this.inputElement = ref)}
                />
            </div>
        );
    }
}

export default StatusInput;

function getStatusValue(status: Status, line: number, column: number) {
    return status === Status.POSITION ? '[' + line + '/' + column + ']' : status;
}

function getStatusStyle(status: Status) {
    if (status === Status.COMMENT) return { backgroundColor: 'rgb(0, 255, 0, 0.4)' };
    if (status === Status.NOTE) return { backgroundColor: 'rgb(255, 128, 0, 0.4)' };
    if (status === Status.RENAME) return { backgroundColor: 'rgb(255, 0, 0, 0.4)' };
    if (status === Status.SEARCH) return { backgroundColor: 'rgb(0, 0, 255, 0.4)' };
    else return { backgroundColor: 'rgb(160, 160, 160, 0.4)' };
}
