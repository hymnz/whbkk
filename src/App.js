import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Waan-Hymn Wedding
          </p>
          <a
            className="App-link"
            href="https://goo.gl/maps/CJCDcZQZXVA2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </header>
      </div>
    );
  }
}

export default App;
