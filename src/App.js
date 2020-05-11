import React from 'react';

import './App.css';

import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="title">
          Happy Mother's Day
        </span>
        <br />
        <ReactPlayer
          url='https://youtu.be/peheo4yGnNI'
          playing
          loop={true}
          width='100%'
        />
      </header>
    </div>
  );
}

export default App;
