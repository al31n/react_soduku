import {NEW_GAME, UPDATE_VALUE, ADD_SECOND} from '../constants/ActionTypes';

export const newGame = () => ({
    type: NEW_GAME,
});

export const updateValue = (i, j, newValue) => ({
    type: UPDATE_VALUE,
    row: i,
    col: j,
    value: newValue
});

export const addSecond = () => ({
    type: ADD_SECOND,
});