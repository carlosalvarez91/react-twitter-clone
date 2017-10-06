import React from 'react'
import PropTypes from 'prop-types'
import styles from './profile.css'

const propTypes = {
 picture: PropTypes.string,
 displayName: PropTypes.string,
 username: PropTypes.string.isRequired,
 emailAddress: PropTypes.string
}

function Profile ({ picture, displayName, username, emailAddress, location }) {
    return(
        <div className={styles.root}>
            <img className={styles.avatar} src={picture} />
            <span className={styles.name}>{displayName}</span>
            <ul className={styles.data}>
                <li>
                    <span className='fa fa-user'></span> {username}
                </li>
                <li>
                    <span className='fa fa-envelope'></span> {emailAddress}
                </li>
                <li>
                    <span className='fa fa-map-marker'></span> {location}
                </li>
            </ul>
        </div>
    )

}

Profile.propTypes = propTypes

export default Profile