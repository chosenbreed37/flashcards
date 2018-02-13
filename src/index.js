import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

console.log('Running flashcards...');

ReactDOM.render(
    <MuiThemeProvider>
        <AppState>
            <App />
        </AppState>
    </MuiThemeProvider>,
    document.getElementById('root'));
 registerServiceWorker();
