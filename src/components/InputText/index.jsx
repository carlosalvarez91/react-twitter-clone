import React, { Component } from 'react'
import styles from './input-text.css'

class InputText extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <form className={styles.form} onSubmit={this.props.onSendText}>
                <textarea className={styles.text} name='text'>
                {(this.props.userNameToReply) ? `@${this.props.userNameToReply} `: ''}
                </textarea>
                <div className={styles.buttons}>
                    <button className={styles.close} onClick={this.props.onCloseText}>close</button>
                    <button className={styles.send} type='submit'>Post</button>
                </div>
            </form>
        )
    }
}
export default InputText