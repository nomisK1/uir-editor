import React from 'react';
import { KeyboardIcon } from '../../svg/Icons';

interface IKeybindButtonProps {
    onButtonPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IKeybindButtonState {
    active: boolean;
}

/**
 * KeybindButton:
 * Button to toggle all keybindings
 */
class KeybindButton extends React.Component<IKeybindButtonProps, IKeybindButtonState> {
    constructor(props: IKeybindButtonProps) {
        super(props);
        this.state = {
            active: true,
        };
    }

    toggle() {
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <button
                className="keybindButton"
                onClick={this.props.onButtonPress}
                style={{ backgroundColor: this.state.active ? 'green' : 'red' }}
            >
                <KeyboardIcon />
            </button>
        );
    }
}

export default KeybindButton;
