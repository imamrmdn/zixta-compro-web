import { Box } from "@chakra-ui/react"

import HomeComponent from "src/components/Home"

import styles from 'src/styles/Home.module.css'

export default function HomePage() {
  return (
    <Box className={styles.container}>
      <HomeComponent />
    </Box>
  )
}
