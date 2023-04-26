import React from 'react'
import styles from "@/styles/Home.module.css";
const Download = () => {
    return (
        <div className={styles.landingMainDownload}>
            <img src="../assets/images/qr.png" alt="" />
            <div className={styles.landingDownloadButtonsContainer}>
                <div className={styles.landingDownloadTitle}>Download VidsPay App</div>
                <div className={styles.landingDownloadButtons}>
                    <img src="../assets/images/appstore_en.svg" alt="" />
                    <img src="../assets/images/google_play_en.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Download