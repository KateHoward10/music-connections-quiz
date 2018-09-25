import React, { Component } from 'react';
import './App.css';
import RoundContainer from './RoundContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Kate’s Music Intros Connections Quiz</h1>
          <button onClick={ () => alert("Songs appear in their original order (except the ones I've replaced) but can be listened to in any order. Connections could be between the songs, or the artists, or both (usually both). Most are wordy, some are a bit more interesting. With every new song you play, the number of available bonus points will go down. So, as soon as you know what the connection is, summarise it in the box (don't overthink this) and submit. You will only get one guess! For songs and artists, just type your answers in the corresponding boxes, before selecting Mark Answers. I never thought I'd say this, but punctuation is not important. Spelling is, although the marking is not case-sensitive.")} className="interrobang">‽</button>
        </header>
        <p>In each round there are ten points available for the artists, ten points for the songs, and up to ten bonus points for the connection, depending on how soon you get it.</p>
        <p>Each connection also applies to the first song of the next round, so it can be thought of as a reject from the previous round.</p>
        <p>I do not own any of these songs, but they are all good, except one.</p>
        <RoundContainer/>
      </div>
    );
  }
}

export default App;
