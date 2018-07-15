import React from 'react';
import { ActionButton } from './ActionButton';

class Header extends React.Component {

    onSignOut = () => {
        const { setAppState, operations: { signOut } } = this.props;

        setAppState(signOut);
    }

    render = () => {
        const { operations, appState } = this.props;
        const { authorise } = operations;

        const { isLoggedIn } = appState;

        const SignInButton = <ActionButton id='sign-in-button' label='Sign In' onClick={authorise} />
        const SignOutButton = <ActionButton id='sign-out-button' label='Sign Out' onClick={this.onSignOut} />

        return (
            <div>
                <div style={{ verticalAlign: 'center' }}>
                    <span style={{ height: '48px', lineHeight: '48px', margin: '5px auto' }} id='header-title'>Flashcards</span>

                    {isLoggedIn ? SignOutButton : SignInButton}
                </div>
            </div>
        );
    }
}

export default Header;