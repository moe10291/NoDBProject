import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import Header from './Header.js';
import Sides from './Sides.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sides/>
        <Sides flip/>
        <Quotes/>
        
        
      </div>
    );
  }
}

export default App;
