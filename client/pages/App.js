import React from 'react';
import {Component} from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <HeaderContainer/>
                {this.props.children}
            </AppContainer>
        );
    }
}