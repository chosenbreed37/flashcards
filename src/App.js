import React, { Component } from 'react';
import logo from './assets/images/mustache.png';
import './App.css';

import { Deck } from './components/Deck';

class App extends Component {

  render() {
    const { appState, setAppState } = this.props;

    return (
      <div className='App'>
        <Deck {...this.props } />
      </div>
    );
  }
}

export default App;
