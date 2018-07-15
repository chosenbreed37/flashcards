import { Component } from 'react';

export class Callback extends Component {

  async componentDidMount() {
    const { 
      setAppState,
      operations: { 
        signIn, setSession, getAuthenticationResult 
      }
    } = this.props;

    const authResult = await getAuthenticationResult();
    setSession(authResult);

    if (authResult && authResult.accessToken) {
      setAppState(signIn);
    }

    window.location.href = "/";
  }

  render() {
    return null;
  }
}