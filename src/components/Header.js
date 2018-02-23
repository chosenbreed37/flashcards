import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {
    state = {
        valueSingle: '3',
        valueMultiple: ['3', '5'],
    };

    handleChangeSingle = (event, value) => {
        this.setState({
            valueSingle: value,
        });
    };

    render = () =>
        (
            <div>
                <AppBar style={{verticalAlign: 'center'}}
                    title={<span>Flashcards</span>}
                    titleStyle={{ height: '48px', lineHeight: '48px', margin: '5px auto' }}
                    iconElementRight={<FlatButton label="Sign In" />}
                />
            </div>
        );
}

export default Header;