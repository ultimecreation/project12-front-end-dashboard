import React from 'react'
import './ProfileHeader.scss'
import PropTypes from 'prop-types';

const ProfileHeader = (props) => {
    return ( 
      
        <div className="profile-header">
             
            <h1>
                Bonjour, <span>{props.firstName}</span>
            </h1>
        </div>
    )
}

ProfileHeader.propTypes = {
    firstName: PropTypes.string
}

export default ProfileHeader
