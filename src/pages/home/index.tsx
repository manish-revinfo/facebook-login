import Header from '@/components/landingPage/Header'
import Main from '@/components/landingPage/Main'
import React from 'react'
import styles from '@/styles/Home.module.css'

const HomePage = () => {
    return (
        <div className="layout-main">
            <div className={styles.layoutContainer}>
                <div className={styles.layoutContainerBg}></div>
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default HomePage