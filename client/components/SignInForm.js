import React, { Component, PropTypes } from 'react';

class SignInForm extends Component {
    render() {
        return (
            <div className="container">
                <a href="/auth/facebook">Login via Facebook</a> | <a href="/auth/vkontakte">Login via VK</a>
            </div>
        )
    }
}

export default SignInForm;