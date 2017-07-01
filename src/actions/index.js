const boardExample = '040002510002056003907000000000000097003040200120000000000000301400860700091500080';

const createNewCell = (row, col, value, editable) => {
    return {
        value,
        row,
        col,
        editable,
        hasConflict: false
    };
}

const loadBoard = (board) => {
    var boardCells = [];
    for (var i = 0; i < 9; i++) {
        var row = []
        for (var j = 0; j < 9; j++) {
            var index = i*9 + j;
            row.push(
                createNewCell(i, j, parseInt(board[index], 10), (board[index] !== '0'))
            );
        }
        boardCells.push(row);
    }
    return boardCells;
}

var Actions = {
    boardExample,
    loadBoard,
    // checkConflicts,
    // checkForWin,
}

export default Actions;