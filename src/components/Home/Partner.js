import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Home.module.css'

export default function Partner() {
    return (
        <>
            <Heading as='h2' my={2} size='lg' textAlign='center'>
                Our Partner
            </Heading>
            <Box className={styles.companyPartnerContainer}>
                <Box p={5} shadow='md' borderWidth='1px' borderRadius='10px' className={styles.companyPartnerWrapper}>
                    <Box className={styles.companyPartnerItem}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={150}
                            height={125}
                        />
                    </Box>

                    <Box className={styles.companyPartnerItem}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={150}
                            height={125}
                        />
                    </Box>

                    <Box className={styles.companyPartnerItem}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={150}
                            height={125}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}