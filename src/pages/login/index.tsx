import React from 'react'
import styles from '@/styles/Login.module.css'
import Header from '@/components/landingPage/Header'
import Auth from '@/components/login/Auth'
import Banner from '@/components/login/Banner'
const Login = () => {
    return (
        <div className={styles.layoutMain}>
            <div className={styles.headerWrapper}>
                <Header />
            </div>
            <div className={styles.loginLayout}>
                <Banner/>
                <Auth />
            </div>
        </div>
    )
}

export default Login;