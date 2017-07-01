import React, {Component} from 'react';
import Actions from '../actions';
import Cell from '../components/Cell';

class SudokuBoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Actions.loadBoard(Actions.boardExample)
    };
  }
  render() {
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
                              cell={cell} />
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