import React, {Component} from 'react';
import Cell from './Cell';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SudokuCellContainer extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        var cell = this.props.cell;
        var newValue = event.target.value;
        
        if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
            event.target.value = cell.value;
            return;
        }
        if (newValue === '') {
            newValue = null;
        }
        this.props.updateValue(cell.row, cell.col, newValue);
    }
    render() {        
        return (<Cell cell={this.props.cell} onChange={this.onChange} />);
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateValue: (i, j, newValue) => {
        dispatch(actions.updateValue(i, j, newValue))
    }
});

export default connect(null, mapDispatchToProps)(SudokuCellContainer);