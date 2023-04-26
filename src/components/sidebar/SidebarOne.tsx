import React from 'react'

import Link from 'next/link';

import styles from '@/styles/Sidebar.module.css'
import commonStyles from '@/styles/Common.module.css'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';


function SidebarOne() {
    return (
        <>
            <div className={styles.sidebarOne}>
                <div className={styles.sidebarOneInner}>
                    <nav className={styles.sidebarOneNav}>
                        <ul>
                            <li className={styles.sidebarOneNavItem}>
                                <Link href="javascript:;" className={`${styles.sidebarOneLink}`}>
                                    <AttachMoneyIcon className={styles.sidebarOneLinkIcons} />
                                    <span className={styles.sidebarOneLinkText}>Balance</span>
                                </Link>
                            </li>
                            <li className={styles.sidebarOneNavItem}>
                                <Link href="javascript:;" className={styles.sidebarOneLink}>
                                    <YouTubeIcon className={styles.sidebarOneLinkIcons} />
                                    <span className={styles.sidebarOneLinkText}>Channels</span>
                                </Link>
                            </li>
                            <li className={styles.sidebarOneNavItem}>
                                <Link href="javascript:;" className={styles.sidebarOneLink}>
                                    <NotificationsNoneIcon className={styles.sidebarOneLinkIcons} />
                                    <span className={styles.sidebarOneLinkText}>Notifications</span>
                                </Link>
                            </li>
                            <li className={styles.sidebarOneNavItem}>
                                <Link href="javascript:;" className={styles.sidebarOneLink}>
                                    <HeadsetMicIcon className={styles.sidebarOneLinkIcons} />
                                    <span className={styles.sidebarOneLinkText}>Support</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.downloadAppBox}>
                        <span className={styles.downloadAppBoxTitle}>Download App VidsPay</span>
                        <img src="../assets/images/qr.png" alt="" />
                        <ul className={styles.downloadAppOptions}>
                            <li>
                                <Link href="#">
                                    <img src="../assets/images/appstore_en.svg" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <img src="../assets/images/google_play_en.svg" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarOne;