import React from 'react';
import {Component} from 'react';

export default class App extends Component {
    componentWillMount() {
        this.props.loadUserFromToken();
    }

    render() {
        return (
            <div style={{margin: '60px 0 0 0'}}>
                {this.props.children}
            </div>
        );
    }
}