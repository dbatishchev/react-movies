import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    renderSignInLinks() {
        const {user} = this.props.user;

        if (user) {
            return (
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav pull-right">
                        <li>
                            <Link to="/profile">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.props.logout}>
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            );
        }

        return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <Link to="/signin">
                            Sign in
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Movies</a>
                    </div>
                    {this.renderSignInLinks()}
                </div>
            </nav>
        );
    }
}

export default Header
