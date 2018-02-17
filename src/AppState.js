import React, { Component } from 'react';
import { model } from './data/model';

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
    }
}

const initialState = {
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