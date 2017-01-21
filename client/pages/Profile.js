import React, { Component } from 'react';
import ProfileCardContainer from '../containers/ProfileCardContainer.js';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2>Profile</h2>
                    <div className='well'>
                        <ProfileCardContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;