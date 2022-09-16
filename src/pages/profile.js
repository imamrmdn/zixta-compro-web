import Head from 'next/head'
import ProfileComponent from 'src/components/Profile'

import styles from 'src/styles/Home.module.css'

export default function Profile() {
    return (
        <>
            <Head>
                <title>Zixta Logistics Services</title>
                <meta name="description" content="Zixta Logistics Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <ProfileComponent />
            </div>
        </>
    )
}
