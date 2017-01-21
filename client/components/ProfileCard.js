import React from 'react';
import { Component } from 'react';

export default class ProfileCard extends Component {

    render() {
        let user = this.props.user.user;
        return (
            <div>
                <div><h4>Name:</h4> {user && user.name}</div>
                <br/><br/>
            </div>
        );
    }
}