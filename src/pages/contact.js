import Head from 'next/head'

import styles from 'src/styles/Home.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zixta Logistics Services</title>
                <meta name="description" content="Zixta Logistics Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
