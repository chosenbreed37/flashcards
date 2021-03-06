import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './registerServiceWorker';

console.log('Running flashcards...');

ReactDOM.render(
        <AppState>
            <App />
        </AppState>,
    document.getElementById('root'));
 registerServiceWorker();
