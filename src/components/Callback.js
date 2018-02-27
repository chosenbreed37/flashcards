import React from 'react';
import { Component } from 'react';

export class Callback extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { setAppState, operations: { signIn, setSession, getAuthenticationResult }, appState } = this.props;
        
    const authResult = await getAuthenticationResult();
    setSession(authResult);

    if (authResult && authResult.accessToken){
      setAppState(signIn);
    }
    
    window.location.href = "/";
  }

  render() {
    return null;
  }
}