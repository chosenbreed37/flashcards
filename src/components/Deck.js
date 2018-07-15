import React, { Component } from 'react';
import { CardDefinition } from './CardDefinition';
import { DerivedWord } from './DerivedWord';
import { ActionButton } from './ActionButton';

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
            <div className='deck'>
                <div style={{padding: 0, paddingBottom: '8px'}}>
                    <div className='header'>
                        <span id='title' className='title'>{name}</span>
                        <span id='subtitle' className='subtitle'>{`(${type})`}</span>
                    </div>
                </div>
                <div className='definitions'>
                    {definitions.map((d, index) => (<CardDefinition key={index} {...d} />))}
                    {derivations.map((d, index) => (<DerivedWord key={index} {...d} />))}
                </div>
                <div className='actions'>
                    <ActionButton id='firstButton' label='<<' onClick={() => setAppState(goToFirst)} disabled={disableBack} >
                    </ActionButton>
                    <ActionButton id='backButton'label='<' onClick={() => setAppState(goBack)} disabled={disableBack}>
                    </ActionButton>
                    <ActionButton id='nextButton' label='>' onClick={() => setAppState(goForward)} disabled={disableForward}>
                    </ActionButton>
                    <ActionButton id='lastButton' label='>>' onClick={() => setAppState(goToLast)} disabled={disableForward}>
                    </ActionButton>
                </div>
            </div>
        )
    }
}