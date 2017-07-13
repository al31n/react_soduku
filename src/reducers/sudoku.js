import {NEW_GAME, UPDATE_VALUE, ADD_SECOND} from '../constants/ActionTypes';
import SudokuManager from './SudokuManager';

const initialState = {
    board: [[]],
    time: null,
    play: false
}
const sudoku = (state=initialState, action) => {
      switch (action.type) {
        case NEW_GAME:
            return {
                board: SudokuManager.loadBoard(SudokuManager.boardExample),
                time: new Date(),
                play: true
            };
        case UPDATE_VALUE:
            var newState = state.board.map((row, i) => (row.map((cell, j) => {
                if ((i === action.row && j === action.col)) {
                    return Object.assign({}, cell, {
                        value: action.value
                    });
                }
                return cell;
            })));
            return {
                board: SudokuManager.markConflicts(newState),
                time: state.time,
                play: state.play
            }
        case ADD_SECOND:
            state.time.setSeconds(state.time.getSeconds() + 1);
            return state;
        default: 
            break;
      }

      return state;
};

export default sudoku;