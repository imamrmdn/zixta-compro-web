import { Box, Heading } from "@chakra-ui/react"

import CeoStory from "./CeoStory"
import OurStory from "./OurStory"
import OurCustomer from "./OurCustomer"
import OurVendor from "./OurVendor"

import styles from 'src/styles/Profile.module.css'

export default function ProfileComponent() {
    return (
        <Box style={{ width: '100%' }}>
            <Heading as='h2' size='lg' color="blue">Profile</Heading>

            <Heading as='h2' mt="16" size='lg' textAlign='center'>
                Our Story
            </Heading>
            <Box className={styles.profileSubTitle}>
                Ayo berkenalan dengan kami lebih dekat!
            </Box>

            <Box className={styles.ourStoryContainer}>
                <CeoStory />
                <OurStory />
            </Box>

            <Heading as='h2' mt="16" size='lg' textAlign="center">Trusted By</Heading>
            <Box className={styles.profileSubTitle}>
                Beberapa mitra dan klien utama kami yang puas dengan layanan kami
            </Box>

            <Heading as='h2' mt="16" size='md' textAlign='center'>
                Our Customer
            </Heading>
            <OurCustomer />

            <Heading as='h2' mt="16" size='md' textAlign='center'>
                Our Vendor
            </Heading>
            <OurVendor />
        </Box>
    )
}