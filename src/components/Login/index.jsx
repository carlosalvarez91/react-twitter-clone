import React from 'react'
import PropTypes from 'prop-types'
import styles from './login.css'

const propTypes = {

    onAuth: PropTypes.func.isRequired
}

function Login ({ onAuth }){
        return(
            <div className={styles.root}>
                <p className={styles.text}>
                    Log in with Facebook to continue
                </p>
                <button 
                    onClick={onAuth}
                    className={styles.button}
                >
                 <span className='fa fa-facebook'></span>  Login with Facebook
                </button>
            </div>
        )
}

Login.propTypes = propTypes

export default Login