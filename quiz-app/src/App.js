import React, { Component } from 'react';
import './App.css';
import RoundContainer from './RoundContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Kate’s Music Intros Connections Quiz</h1>
        </header>
        <p>For each round there are ten points available for the artists, ten points for the songs, and up to ten points available for getting the connection right, depending on how many songs you've listened to so far.</p>
        <p>Each connection also applies to the first song of the next round, so it can be thought of as a reject from the previous round.</p>
        <p>I do not own any of these songs, but they are all good, except one.</p>
        <RoundContainer/>
      </div>
    );
  }
}

export default App;
