import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react"

import styles from 'src/styles/Home.module.css'

import juggernautImage from 'assets/jugger.jpg'

export default function WhyReason() {
    const [isCompanyReasonVisible, setisCompanyReasonVisible] = useState(false)

    const companyReasonRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyReasonVisible(entry.isIntersecting)
        });

        observer.observe(companyReasonRef.current)
    }, [])

    return (
        <Box mt="10" ref={companyReasonRef} className={isCompanyReasonVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign='center'>
                Kenapa Harus Three Dot?
            </Heading>
            <Box className={styles.companyReasonContainer}>
                <Box className={styles.companyReasonItemWrapper}>
                    <Box mx="1" width={125}>
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
                            Layanan 24/7
                        </Heading>
                        <Box className={styles.companyReasonItemSubTitle}>
                            Pemesanan pengiriman peti kemas bisa dilakukan setiap saat
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyReasonItemWrapper}>
                    <Box mx="1" width={125}>
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
                            Pembayaran Aman
                        </Heading>
                        <Box className={styles.companyReasonItemSubTitle}>
                            Nikmati sistem pembayaran yang mudah, aman, dan transparan
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyReasonItemWrapper}>
                    <Box mx="1" width={125}>
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
                            Harga Kompetitif
                        </Heading>
                        <Box className={styles.companyReasonItemSubTitle}>
                            Temukan daftar penyedia layanan dengan penawaran harga yang hemat
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyReasonItemWrapper}>
                    <Box mx="1" width={125}>
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
                            Layanan Seluruh Indonesia
                        </Heading>
                        <Box className={styles.companyReasonItemSubTitle}>
                            Rasakan keuntungan menggunakan platform kami di mana pun Anda berada
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
