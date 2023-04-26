import React from 'react'
import Header from '@/components/landingPage/Header';
import Banner from '@/components/login/Banner';
import styles from '@/styles/Login.module.css'
import Auth from '@/components/sign-up/Auth';
const SignUp = () => {
    return (
        <div className={styles.layoutMain}>
            <div className={styles.headerWrapper}>
                <Header />
            </div>
            <div className={styles.loginLayout}>
                <Banner />
                <Auth />
            </div>
        </div>
    )
}

export default SignUp;