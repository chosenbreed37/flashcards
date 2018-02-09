import React, { Component } from 'react';
import { CardDefinition } from './CardDefinition';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import './Deck.css';

export class Deck extends Component {

    render() {
        const { setAppState } = this.props;
        const { appState } = this.props;
        const { currentWord: { name, type, definitions }, goForward, goBack, canGoForward, canGoBack }  = appState;
        const disableBack = !canGoBack(appState);
        const disableForward = !canGoForward(appState);

        return (
            <Paper zDepth={2}>
                <Card>
                    <CardHeader
                        title={name} titleStyle={{ fontWeight: 'bold', fontSize: 'larger' }}
                        subtitle={`(${type})`}
                    />
                    <Divider />
                    <CardText>
                        {definitions.map(d => (<CardDefinition key={d.id} {...d} />))}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Back" onClick={() => setAppState(goBack)} disabled={disableBack} />
                        <FlatButton label="Next" onClick={() => setAppState(goForward)} disabled={disableForward} />
                    </CardActions>
                </Card>
            </Paper>)
    }
}