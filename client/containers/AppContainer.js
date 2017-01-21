import React, {Component} from 'react';
import {connect} from 'react-redux';
import {meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken} from '../actions/users';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserFromToken: () => {
            let token = sessionStorage.getItem('token');
            if (!token || token === '') {
                return;
            }
            dispatch(meFromToken(token))
                .then((response) => {
                    if (!response.error) {
                        dispatch(meFromTokenSuccess(response.payload));
                    } else {
                        sessionStorage.removeItem('token');
                        dispatch(meFromTokenFailure(response.payload));
                    }
                });
        },
        resetMe: () => {
            sessionStorage.removeItem('token');
            dispatch(resetToken());
        }
    }
};

export default connect(null, mapDispatchToProps)(App);