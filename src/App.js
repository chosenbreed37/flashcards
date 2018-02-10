import React, { Component } from 'react';
import './App.css';

import { Deck } from './components/Deck';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Deck {...this.props } />
      </div>
    );
  }
}

export default App;
