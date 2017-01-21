import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    renderSignInLinks(user) {
        if (user) {
            return (
                <ul className="nav  nav-pills navbar-right">
                    <li style={{paddingRight: '10px'}} role="presentation">
                        <Link role="presentation" style={{color: '#996633', fontSize: '17px'}} to="/profile">
                            {user.userId}
                        </Link>
                    </li>
                    <li style={{paddingRight: '10px'}} role="presentation">
                        <a style={{color: '#996633', fontSize: '17px'}} onClick={this.props.logout}
                           href="javascript:void(0)">
                            Log out
                        </a>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="nav  nav-pills navbar-right">
                <li style={{paddingRight: '10px'}} role="presentation">
                    <Link role="presentation" style={{color: '#996633', fontSize: '17px'}} to="/signup">
                        Sign up
                    </Link>
                </li>
                <li style={{paddingRight: '10px'}} role="presentation">
                    <Link style={{color: '#996633', fontSize: '17px'}} to="/signin">
                        Sign in
                    </Link>
                </li>
            </ul>
        );
    }

    renderLinks() {
        const {user} = this.props.user;
        return (
            <div className="container">
                <ul className="nav  nav-pills navbar-right">
                    <li style={{paddingRight: '10px'}} role="presentation">
                        <Link style={{color: '#337ab7', fontSize: '17px'}} to="/posts/new">
                            New Post
                        </Link>
                    </li>
                </ul>
                {this.renderSignInLinks(user)}
            </div>
        );
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

export default Header
