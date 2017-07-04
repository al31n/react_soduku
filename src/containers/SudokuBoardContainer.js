import React, {Component} from 'react';
import Actions from '../actions';
import {default as Cell} from './CellContainer';

class SudokuBoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Actions.loadBoard(Actions.boardExample)
    };

    var handleUpdateCell = this.handleUpdateCell.bind(this);
  }
  
  //  update puzzle with new value
  handleUpdateCell(i, j, value) {
      var updatedBoard = this.state.board;
      updatedBoard[i][j].value = value;
      this.setState({
        board: updatedBoard
      });
      Actions.markConflicts(this.state.board);
  }

  render() {
    var handleUpdateCell = this.handleUpdateCell;
    return (
      <div>
        <table>
          <tbody>
            {
              this.state.board.map((row, i) => {
                return (
                  <tr key={i}>
                    {row.map((cell, j) => (
                        <Cell key={j} 
                              cell={cell}
                              handleUpdateCell={handleUpdateCell.bind(this)} />
                      ))}
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SudokuBoardContainer;