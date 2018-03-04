import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {

    onSignOut = () => {
        const { setAppState, operations: { signOut } } = this.props;

        setAppState(signOut);
    }

    render = () => {
        const { setAppState, operations, appState } = this.props;
        const { authorise, signOut } = operations;
        
        const { isLoggedIn } = appState;

        const SignInButton = <FlatButton id='sign-in-button' label='Sign In' onClick={authorise} />
        const SignOutButton = <FlatButton id='sign-out-button' label='Sign Out' onClick={this.onSignOut} />

        return (
            <div>
                <AppBar style={{ verticalAlign: 'center' }}
                    title={<span id='header-title'>Flashcards</span>}
                    titleStyle={{ height: '48px', lineHeight: '48px', margin: '5px auto' }}
                    iconElementRight={isLoggedIn ? SignOutButton : SignInButton}
                />
            </div>
        );
    }
}

export default Header;