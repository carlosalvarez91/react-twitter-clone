import React,{ Component } from 'react'
import styles from './login.css'

class Login extends Component{
    render (){
        return(
            <div className={styles.root}>
                <p className={styles.text}>
                    Log in with Facebook or Github to continue
                </p>
                <button 
                    onClick={this.props.onAuth}
                    className={styles.button}
                >
                 <span className='fa fa-github'></span>  Login with Github
                </button>
            </div>
        )
    }
}
export default Login