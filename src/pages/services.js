import Head from 'next/head'
import ServicesComponent from 'src/components/Services'

import styles from 'src/styles/Home.module.css'

export default function Services() {
    return (
        <>
            <Head>
                <title>Zixta Logistics Services</title>
                <meta name="description" content="Zixta Logistics Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <ServicesComponent />
            </div>
        </>
    )
}
