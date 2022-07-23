import Head from 'next/head'

import ProfileComponent from 'src/components/Profile'

import styles from 'src/styles/Home.module.css'

export default function Profile() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zixta Logistics Services</title>
                <meta name="description" content="Zixta Logistics Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProfileComponent />
        </div>
    )
}
