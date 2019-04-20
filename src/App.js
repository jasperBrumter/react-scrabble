import React, { Component } from 'react';
import './App.css';
import LettersContainer from "./containers/LettersContainer/letterscontainer.jsx";
import WordInput from './containers/WordInput/wordinput.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LettersContainer />
        <WordInput />
      </div>
    );
  }
}

export default App;
