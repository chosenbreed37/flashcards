import React, { Component } from 'react';
import { model } from './data/model';
import { createAuthorisationService } from './utilities/authorisation-service-factory';

const authorisationService = createAuthorisationService();

const isAuthenticated = authorisationService.isAuthenticated;

const operations = {
    canGoForward: (state) => state.currentIndex < (state.words.length - 1),
    canGoBack: (state) => state.currentIndex > 0,
    goForward: () => (state) => {
        const nextIndex = state.currentIndex + 1;
        return { ...state, currentIndex: nextIndex }
    },
    goBack: () => (state) => {
        const nextIndex = state.currentIndex - 1;
        return { ...state, currentIndex: nextIndex }
    },
    goToFirst: () => (state) => {
        return { ...state, currentIndex: 0 }
    },
    goToLast: () => (state) => {
        return { ...state, currentIndex: state.words.length - 1 }
    },
    signIn: () => (state) => {
        return { ...state, isLoggedIn: true }
    },
    signOut: () => (state) => {
        authorisationService.unauthorise();
        return { ...state, isLoggedIn: false }
    },
    authorise: () => {
        authorisationService.authorise();
    },
    setSession: (authResult) => {
        authorisationService.setSession(authResult);
    },
    getAuthenticationResult: async () => {
        return await authorisationService.getAuthenticationResult();
    }
}

const initialState = {
    isLoggedIn: false,
    words: model.words,
    currentIndex: 0
};

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = props.state || initialState;
    }

    setAppState = (updater, callback) => {
        // newState can be object or function!
        this.setState(updater(this.state), () => {
            if (this.props.debug) {
                console.log('setAppState', JSON.stringify(this.state));
            }
            if (callback) {
                callback();
            }
        });
    }

    componentDidMount = () => {
        const isLoggedIn = isAuthenticated();
        this.setState({ ...this.state, isLoggedIn });
    }

    render() {
        return (
            <div className="AppState">
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        appState: this.state,
                        setAppState: this.setAppState,
                        operations
                    });
                })}
            </div>
        );
    }
}

export default AppState;