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
            var value = (board[index] !== '0') ? board[index] : null;
            row.push(
                createNewCell(i, j, value, (value !== null))
            );
        }
        boardCells.push(row);
    }
    return boardCells;
}

const clearConflicts = (cells) => {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            cells[i][j].hasConflict = false;
        }
    }
}
const markSubset = (subset) => {
    var visited = {};

    for (var i = 0; i < 9; i++) {
        var value = subset[i].value;
        if (value !== null) {
            if (visited.hasOwnProperty(value)) {
                subset[i].hasConflict = true;
                subset[visited[subset[i].value]].hasConflict = true;
            }
            visited[subset[i].value] = i;
        }
    }
}

const markConflicts = (cells) => {
    clearConflicts(cells);

    // horizontal
    for (let i = 0; i < 9; i++) {
        markSubset(cells[i]);
    }

    // vertical
    for (let i = 0; i < 9; i++) {
        var col = [];
        for (let j = 0; j < 9; j++) {
            col.push(cells[j][i]);
        }
        markSubset(col);
    }

    // boxes
    for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
            var box = [];
            for (let i = m * 3; i < (m+1)* 3; i++) {
                for (let j = n * 3; j < (n+1)* 3; j++) {
                    box.push(cells[i][j]);
                }   
            }
            markSubset(box);
        }
    }
}

const checkForWin = (cells) => {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (cells[i][j].value === null || cells[i][j].hasConflict) {
                return false;
            }
        }
    }
    return true;
} 

var Actions = {
    boardExample,
    loadBoard,
    markConflicts,
    checkForWin,
}

export default Actions;