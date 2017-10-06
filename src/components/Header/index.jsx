import React from 'react'
import { Link } from 'react-router'
import styles from './header.css'

// This is a Stateless Component, so we don't need to use a react component
function Header() {
        return(
            <header className={styles.root}>
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <h1 className={styles.logo}>
                        TEST
                    </h1>
                </Link>
            </header>
        )
}
export default Header