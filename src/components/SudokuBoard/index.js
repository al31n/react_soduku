import React, {Component} from 'react';
import {connect} from 'react-redux';
import {default as Cell} from '../SudokuCell';
import SudokuBoardStyle from './SudokuBoard.css';
import PropTypes from 'prop-types';

class SudokuBoard extends Component {
  render() {
    return (
      <div>
        <table style={SudokuBoardStyle}>
          <tbody>
            {this.props.board.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                    <td key={j} className={"r" + i + " c" + j}>
                      <Cell cell={cell} />
                    </td>
                ))}
              </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

SudokuBoard.propTypes = {
  board: PropTypes.arrayOf(
          PropTypes.arrayOf(
            PropTypes.shape({
              row: PropTypes.number.isRequired,
              col: PropTypes.number.isRequired,
              value: PropTypes.string,
              selected: PropTypes.bool,
              hasConflict: PropTypes.bool.isRequired,
              editable: PropTypes.bool.isRequired
            })
          )
        )
}

const mapStateToProps = (state) => ({
    board : state.sudoku.board
})

export default connect(mapStateToProps)(SudokuBoard);