import React from 'react'
import PropTypes from 'prop-types'
import styles from './input-text.css'

const propTypes = {
    onSendText: PropTypes.func.isRequired,
    userNameToReply: PropTypes.string.isRequired,
    onCloseText: PropTypes.func.isRequired
}

function InputText ({ onSendText, userNameToReply, onCloseText }){
        return (
            <form className={styles.form} onSubmit={onSendText}>
                <textarea className={styles.text} name='text' defaultValue={(userNameToReply) ? `@${userNameToReply} `: ''}>

                </textarea>
                <div className={styles.buttons}>
                    <button className={styles.close} onClick={onCloseText}>close</button>
                    <button className={styles.send} type='submit'>Post</button>
                </div>
            </form>
        )
}

InputText.propTypes = propTypes

export default InputText