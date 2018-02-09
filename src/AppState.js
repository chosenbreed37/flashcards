import React, { Component } from 'react';
import { words } from './data/model';

const initialState = {
    words,
    currentWordIndex: 0,
    currentWord: words[0],
    canGoForward: (state) => state.currentWordIndex < (words.length - 1),
    canGoBack: (state) => state.currentWordIndex > 0,
    goForward: () => (state) => {
        const nextIndex = state.currentWordIndex + 1;
        return { ...state, currentWordIndex: nextIndex, currentWord: words[nextIndex] }
    },
    goBack: () => (state) => {
        const nextIndex = state.currentWordIndex - 1;
        return { ...state, currentWordIndex: nextIndex, currentWord: words[nextIndex] }
    },
};

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
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

    render() {
        return (
            <div className="AppState">
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        appState: this.state,
                        setAppState: this.setAppState
                    });
                })}
            </div>
        );
    }
}

export default AppState;