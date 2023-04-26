import React from 'react'
import Download from '../landingPage/Download'
import styles from '@/styles/Login.module.css'
const Banner = () => {
    return (
        <div className={styles.loginBannerContainer}>
            <div className={styles.loginInnerBanner}>
                <div>
                    <img src="../assets/images/phones_en.png" alt="" />
                </div>
                <Download />
            </div>
        </div>
    )
}

export default Banner