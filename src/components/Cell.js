import React from 'react';
import PropTypes from 'prop-types';

const styles = {border: "1px solid red"}

const Cell = ({cell, onChange}) => (
    <td>
      <input maxLength="1" 
             size="1" 
             defaultValue={(cell.value !== "") ? cell.value : ""} 
             readOnly={cell.editable}
             onChange={onChange} 
             style={cell.hasConflict? styles: {}}/>
    </td>
)

Cell.PropTypes = { 
  row: PropTypes.number,
  col: PropTypes.number,
  value: PropTypes.number,
  selected: PropTypes.bool,
  hasConflict: PropTypes.bool,
  editable: PropTypes.bool.isRequired
}

export default Cell;