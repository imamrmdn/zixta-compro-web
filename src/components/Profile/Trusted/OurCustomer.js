import Image from "next/image"
import { Box } from "@chakra-ui/react"

import adrImage from 'assets/adr-logo.png'
import putraBajaDeliImage from 'assets/putrabajadeli-logo.png'
import zoomlionImage from 'assets/zoomlion-logo.png'
import ligoLogoImage from 'assets/ligo-logo.png'

import styles from 'src/styles/Profile.module.css'

export default function OurCustomer() {
    return (
        <Box className={styles.companyCustomerContainer}>
            <Box p={5} className={styles.companyCustomerWrapper}>
                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={adrImage}
                        alt="jugger image"
                        layout="fixed"
                        objectFit="contain"
                        width={125}
                        height={100}
                    />
                </Box>

                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={putraBajaDeliImage}
                        alt="jugger image"
                        layout="fixed"
                        objectFit="contain"
                        width={125}
                        height={100}
                    />
                </Box>

                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={zoomlionImage}
                        alt="jugger image"
                        layout="fixed"
                        objectFit="contain"
                        width={125}
                        height={100}
                    />
                </Box>

                <Box className={styles.companyCustomerItem}>
                    <Image
                        src={ligoLogoImage}
                        alt="jugger image"
                        layout="fixed"
                        objectFit="contain"
                        width={125}
                        height={100}
                    />
                </Box>
            </Box>
        </Box>
    )
}