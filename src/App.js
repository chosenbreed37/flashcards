import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { WebAuth } from 'auth0-js';
import { Deck } from './components/Deck';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const CLIENT_ID = 'jPbxaoIZiWnKBlFho4hmCDlv7i0k7RED';
const DOMAIN = 'functional-first.eu.auth0.com';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

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

  componentDidMount() {
    if (this.isAuthenticated()) {
      let profile = null;
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.log('Access Token must exist to fetch profile');
      }
      this.webAuth.client.userInfo(accessToken, (err, result) => {
        if (result) {
          profile = result;
        }
      });
      this.setState({
        ...this.state,
        accessToken,
        profile
      })
    } else {
      this.webAuth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          this.setState({
            ...this.state,
            accessToken: authResult.accessToken,
            idToken: authResult.idToken,
            expiresIn: authResult.expiresIn
          },
            () => console.log('>>> state: ', this.state));
        } else if (err) {
          console.log(err);
          alert(
            'Error: ' + err.error + '. Check the console for further details.'
          );
        }
      });
    }
  }


  componentWillMount() {
    this.webAuth = new WebAuth(
      {
        domain: DOMAIN,
        clientID: CLIENT_ID,
        responseType: 'token id_token',
        // audience: 'https://function-first.eu.auth0.com/userinfo',
        scope: 'openid profile',
        redirectUri: window.location.href
      }
    );
  }

  signIn = (e) => {
    e.preventDefault();
    this.webAuth.authorize();
  }

  setSession = (authResult) => {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  signOut = () => {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Header />
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/deck">Deck</Link></li>
            </ul>

            <hr /> */}

            <Route path="/" render={
              (props) => <Deck {...props} {...this.props } />
            } />
            <Route path="/about" component={About} />
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
