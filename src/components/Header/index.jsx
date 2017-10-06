import React from 'react'
import styles from './header.css'

// This is a Stateless Component, so we don't need to use a react component
function Header() {
        return(
            <header className={styles.root}>
                <h1 className={styles.logo}>
                    Test
                </h1>
            </header>
        )
}
export default Header