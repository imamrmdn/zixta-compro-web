import Head from 'next/head'
import { Box } from "@chakra-ui/react"

import HomeComponent from "src/components/Home"

import styles from 'src/styles/Home.module.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zixta Logistics Services</title>
        <meta name="description" content="Zixta Logistics Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={styles.container}>
        <HomeComponent />
      </Box>
    </>
  )
}
