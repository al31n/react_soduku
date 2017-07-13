import React, { Component } from 'react';
import SudokuBoard from '../components/SudokuBoard';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Soduku</h1>
        <SudokuBoard />
      </div>
    );
  }
}

export default App;
