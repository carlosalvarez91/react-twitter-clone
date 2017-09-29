import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './profile-bar.css'

class ProfileBar extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className={styles.root}>
                <Link to='/profile'>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} />
                    </figure>
                </Link>
                <span className={styles.username}>Hello @{this.props.username}!</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fa fa-lg fa-edit"></span> Tweet!
                </button>
            </div>
        )
    }
}
export default ProfileBar