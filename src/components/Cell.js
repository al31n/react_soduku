import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({cell}) => (
    <td>
      <input maxLength="1" 
             size="1" 
             defaultValue={(cell.value !== 0) ? cell.value : ""} 
             readOnly={cell.editable} />
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