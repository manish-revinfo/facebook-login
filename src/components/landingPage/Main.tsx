import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router'
import Download from "./Download";
import Link from "next/link";
const Main = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
    }
    return (
        <div className={styles.layoutInnerContainer}>
            <div className="landingMain">
                <div className={styles.landingMainTop}>
                    <div className={styles.landingMainTopLeft}>
                        <div className={styles.landingMainTitle}>
                            VidsPay is a service for YouTube creators 🔥
                        </div>
                        <ul className={styles.landingMainList}>
                            <li>
                                <div className={styles.landingMainListItem}>
                                    <span className={styles.landingMainListItemSpan}>
                                        Get paid every day instead of once a month
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={styles.landingMainListItem}>
                                    <span className={styles.landingMainListItemSpan}>
                                        Request advances to receive money immediately
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={styles.landingMainListItem}>
                                    <span className={styles.landingMainListItemSpan}>
                                        Withdraw money to cards, bank accounts, e-wallets
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <button className="primaryButton" onClick={handleClick}>
                            <span>Login to VidsPay</span>
                        </button>
                    </div>
                    <div className={styles.landingMainTopRight}>
                        <img src="../assets/images/banner-main.png" alt="" />
                        <Download/>
                    </div>
                </div>
                <div className={styles.landingMainBottom}>
                    <Link href="">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
