import React, { Component } from 'react';
import { CardDefinition } from './CardDefinition';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import './Deck.css';

export class Deck extends Component {

    render() {
        const { setAppState, operations, appState } = this.props;
        const { words, currentIndex } = appState;

        const { name, type, definitions } = words[currentIndex];
        const { goForward, goBack, canGoForward, canGoBack } = operations;
        const disableBack = !canGoBack(appState);
        const disableForward = !canGoForward(appState);

        return (
            <Paper zDepth={2}>
                <Card className='deck'>
                    <CardHeader>
                        <div className='header'>
                            <span id='title' className='title'>{name}</span>
                            <span id='subtitle' className='subtitle'>{`(${type})`}</span>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardText>
                        {definitions.map((d, index) => (<CardDefinition key={index} {...d} />))}
                    </CardText>
                    <CardActions>
                        <FlatButton id='backButton' label="Back" onClick={() => setAppState(goBack)} disabled={disableBack} />
                        <FlatButton id='nextButton' label="Next" onClick={() => setAppState(goForward)} disabled={disableForward} />
                    </CardActions>
                </Card>
            </Paper>)
    }
}