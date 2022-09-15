import Image from "next/image"
import { Box } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'
import interconImage from 'assets/intercon-logo.png'

import styles from 'src/styles/Profile.module.css'

export default function OurVendor() {
    return (
        <Box className={styles.companyCustomerContainer}>
            <Box p={5} className={styles.companyCustomerWrapper}>
                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={interconImage}
                        alt="jugger image"
                        layout="fixed"
                        width={125}
                        height={100}
                    />
                </Box>

                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={juggernautImage}
                        alt="jugger image"
                        layout="fixed"
                        width={125}
                        height={100}
                    />
                </Box>

                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={juggernautImage}
                        alt="jugger image"
                        layout="fixed"
                        width={125}
                        height={100}
                    />
                </Box>
            </Box>
        </Box>
    )
}