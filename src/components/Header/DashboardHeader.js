import styles from '@/styles/Header.module.css'

function DashboardHeader(){
    return(
        <header className={styles.dashHeader}>
            <div className='container-fluid'>
                <div className={styles.brandLogo}>
                    <img src="../assets/images/vidspayLogo.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader;