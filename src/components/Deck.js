import React, { Component } from 'react';
import { CardDefinition } from './CardDefinition';
import { DerivedWord } from './DerivedWord';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import './Deck.css';

export class Deck extends Component {

    render() {
        const { setAppState, operations, appState } = this.props;
        const { words, currentIndex } = appState;

        const { name, type, definitions, derivations } = words[currentIndex];
        const { goForward, goBack, canGoForward, canGoBack, goToFirst, goToLast } = operations;
        const disableBack = !canGoBack(appState);
        const disableForward = !canGoForward(appState);

        return (
            <Card className='deck'>
                <CardHeader style={{padding: 0, paddingBottom: '8px'}}>
                    <div className='header'>
                        <span id='title' className='title'>{name}</span>
                        <span id='subtitle' className='subtitle'>{`(${type})`}</span>
                    </div>
                </CardHeader>
                <Divider />
                <CardText className='definitions'>
                    {definitions.map((d, index) => (<CardDefinition key={index} {...d} />))}
                    {derivations.map((d, index) => (<DerivedWord key={index} {...d} />))}
                </CardText>
                <CardActions className='actions'>
                    <IconButton id='firstButton' onClick={() => setAppState(goToFirst)} disabled={disableBack} >
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
                            <path d="M24 24H0V0h24v24z" fill="none" />
                        </svg>
                    </IconButton>
                    <IconButton id='backButton' onClick={() => setAppState(goBack)} disabled={disableBack}>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </IconButton>
                    <IconButton id='nextButton' onClick={() => setAppState(goForward)} disabled={disableForward}>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </IconButton>
                    <IconButton id='lastButton' onClick={() => setAppState(goToLast)} disabled={disableForward}>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
                            <path d="M0 0h24v24H0V0z" fill="none" />
                        </svg>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}