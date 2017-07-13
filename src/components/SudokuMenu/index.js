import React, {Component} from 'react';
import Clock from './Clock';
import MessageBoard from './MessageBoard';

class SudokuMenu extends Component {
    render() {
        return (
            // Timer
            <div>
                <Clock />
                <MessageBoard />
            </div>
        );
    }
}