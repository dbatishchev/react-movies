import React, { Component, PropTypes } from 'react';

class SignInForm extends Component {
    render() {
        return (
            <div className="container">
                <a href="/auth/facebook">Log in</a> | <a href="/auth/vkontakte">Log in</a>
            </div>
        )
    }
}

export default SignInForm;