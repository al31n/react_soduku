import React, { Component } from 'react';
import SudokuBoardContainer from './containers/SudokuBoardContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Soduku</h1>
        <SudokuBoardContainer />
      </div>
    );
  }
}

export default App;
