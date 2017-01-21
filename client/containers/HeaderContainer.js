import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import Header from '../components/header.js';

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            sessionStorage.removeItem('token');
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);