import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'
import styles from 'src/styles/Services.module.css'

export default function ListServices() {
    const [isCompanyServicesVisible, setisCompanyServicesVisible] = useState(false)

    const companyServicesRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyServicesVisible(entry.isIntersecting)
        });

        observer.observe(companyServicesRef.current)
    }, [])

    return (
        <Box ref={companyServicesRef} className={isCompanyServicesVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Box className={styles.companyServicesContainer}>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            Freight Forwading
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Pemesanan pengiriman peti kemas bisa dilakukan setiap saat
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            Heavyduty Transportation
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Nikmati sistem pembayaran yang mudah, aman, dan transparan
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            Inland Transportation
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Temukan daftar penyedia layanan dengan penawaran harga yang hemat
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            PPJK Custom Dearance
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Rasakan keuntungan menggunakan platform kami di mana pun Anda berada
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            Transportation Management
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Temukan daftar penyedia layanan dengan penawaran harga yang hemat
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyServicesItemWrapper}>
                    <Box mx="0.5" width={125}>
                        <Image
                            src={juggernautImage}
                            alt="jugger image"
                            layout="fixed"
                            width={125}
                            height={100}
                        />
                    </Box>
                    <Box mx='1'>
                        <Heading as='h2' size='md' color='blue'>
                            Insurance
                        </Heading>
                        <Box className={styles.companyServicesItemSubTitle}>
                            Rasakan keuntungan menggunakan platform kami di mana pun Anda berada
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}