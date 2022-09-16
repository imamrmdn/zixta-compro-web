import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic";
import { Box, Text, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

// import MapComponent from "./Map";

import styles from 'src/styles/Contact.module.css'

const MapWithNoSSR = dynamic(() => import('./Map'), { ssr: false });

export default function Contact() {
    const [isCompanyContactVisible, setisCompanyContactVisible] = useState(false)

    const { messages } = useIntl()
    const companyContactRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyContactVisible(entry.isIntersecting)
        });

        observer.observe(companyContactRef.current)
    }, [])

    return (
        <Box className={styles.ourContact}>
            <Box id="contact" style={{ height: '7em' }} />
            <Box ref={companyContactRef} className={isCompanyContactVisible && `animate__animated  animate__slideInLeft animate__slow`} style={{ width: '100%' }}>
                <Heading as='h2' size='lg'>{messages["navbar.contact"]}</Heading>
                <Box className={styles.contactWrapper}>
                    <Box p={5} mt="4" shadow='sm' className={styles.contactCardOffice}>
                        <Heading fontSize='xl' textAlign="center" height="6">Head Office</Heading>
                        <Text mt="2" textAlign="center" color="#718096">Gedung Tjokro Bersaudara lt.2, Jl. Enggano No. 66 RT.013/RW.06, Tanjung Priok, Jakarta Utara, DKI Jakarta, 14310</Text>

                        <Heading mt="6" fontSize='xl' textAlign="center" height="6">Branch Office</Heading>
                        <Text mt="2" textAlign="center" color="#718096">Jl. Pasir Putih Raya Blok E- 5D No. 13 (Ruko Kobexindo), Ancol, Pademangan, Jakarta Utara, DKI Jakarta, 14430</Text>

                        <Heading mt="6" fontSize='xl' textAlign="center" height="6">Pool</Heading>
                        <Text mt="2" textAlign="center" color="#718096">Garasi Rohan, Jalan Sarang Bangau, Marunda, Jakarta Utara</Text>
                    </Box>

                    <MapWithNoSSR />
                    {/* <MapComponent /> */}
                </Box>
            </Box >
        </Box>
    )
}