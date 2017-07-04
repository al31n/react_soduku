import React, {Component} from 'react';
import Cell from '../components/Cell';


class CellContainer extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
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

        this.props.handleUpdateCell(cell.row, cell.col, newValue);
    }
    render() {
        var cell = this.props.cell;
        return <Cell cell={cell} onChange={this.onChange} />
    }
}

export default CellContainer;