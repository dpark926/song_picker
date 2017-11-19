import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Label</div>
        <div>Year</div>
        <div>Key</div>
        <div>
          <div>BPM</div>
          <div>Slow</div>
          <div>Medium</div>
          <div>Fast</div>
        </div>

        <div>Transpose</div>
        <div>Lyrics Only</div>

        <div>Add to list</div>

        <div>Listen</div>
      </div>
    );
  }
}

export default App;
