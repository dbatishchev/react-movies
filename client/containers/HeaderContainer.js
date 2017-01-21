import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetToken } from '../actions/users';
import Header from '../components/header.js';

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            localStorage.removeItem('token');
            dispatch(resetToken());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);