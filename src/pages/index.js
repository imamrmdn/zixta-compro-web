import Head from "next/head"
import { Box } from "@chakra-ui/react"

import styles from 'src/styles/Home.module.css'

import HomeComponent from "src/components/Home"

export default function HomePage() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Zixta Logistics Services</title>
        <meta name="description" content="Zixta Logistics Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </Box>
  )
}
