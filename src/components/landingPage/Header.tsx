import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '@/styles/Home.module.css'

const Header = () => {
    return (
        <div className={styles.layoutHeader}>
            <img src="../assets/images/vidspayLogo.png" alt="logo" className={styles.logo}/>
        </div>
    )
}

export default Header