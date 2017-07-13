import React from 'react';
import PropTypes from 'prop-types';
import CellStyle from './Cell.css';

const Cell = ({cell, onChange}) => {
    var classNames = [];
    classNames.push(cell.editable ? 'editable' : 'not-editable');
    classNames.push(cell.hasConflict ? 'has-conflict' : 'no-conflict');
    
    return (
        <input className={classNames.join(' ')}
                style={CellStyle}
                maxLength="1" 
                size="1" 
                defaultValue={(cell.value !== "") ? cell.value : ""}
                readOnly={!cell.editable} 
                onChange={onChange}/>
    );
}

Cell.propTypes = {
  cell: PropTypes.shape({
    row: PropTypes.number,
    col: PropTypes.number,
    value: PropTypes.string,
    selected: PropTypes.bool,
    hasConflict: PropTypes.bool,
    editable: PropTypes.bool.isRequired
  })
}

export default Cell;