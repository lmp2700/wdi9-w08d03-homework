import React, { Component } from 'react';
import './App.css';
import GetGiphy from './GiphyContainer/GiphyContainer'

// Create a react app that has a search bar to search the Giphy API for gifs. Display the results of the search.

// API KEY: gOo46PIR8rfEc3oWhnh7j6hUlLNZn1jA

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <GetGiphy />
      </div>
    );
  }
}

export default App;
