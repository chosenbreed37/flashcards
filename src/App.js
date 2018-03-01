import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Deck } from './components/Deck';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Callback } from './components/Callback';

import './App.css';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Header {...this.props} />
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/deck">Deck</Link></li>
            </ul>

            <hr /> */}
            <Switch>
              <Route exact path='/' render={
                (props) => <Deck {...props} {...this.props } />
              } />
              <Route path='/callback' render={
                (props) => <Callback {...props} {...this.props} />
              } />
              <Route path='/deck' render={
                (props) => <Deck {...props} {...this.props } />
              } />
              <Route path='/about' component={About} />
            </Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Footer />
          </div>
        </Router>        {/* {loggedIn ?
          <Deck {...this.props } />
          : <button onClick={this.signIn}>Sign In</button>
        } */}
      </div>
    );
  }
}

export default App;
