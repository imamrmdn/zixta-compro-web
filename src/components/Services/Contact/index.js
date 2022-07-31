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
        <Box id="contact" mt="16" ref={companyContactRef} className={isCompanyContactVisible && `animate__animated  animate__slideInLeft animate__slow`} style={{ width: '100%' }}>
            <Heading as='h2' size='lg' color="blue">{messages["navbar.contact"]}</Heading>
            <Box className={styles.contactWrapper}>
                <Box p={5} mt="4" shadow='sm' className={styles.contactCardOffice}>
                    <Heading fontSize='xl' textAlign="center" height="6">Head Office</Heading>
                    <Text mt="2" textAlign="center">Jl. Enggano No.66, RT.4/RW.16, Tj. Priok, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14310</Text>

                    <Heading mt="6" fontSize='xl' textAlign="center" height="6">Branch Office</Heading>
                    <Text mt="2" textAlign="center">Jl. Pasir Putih Raya Blok E-5d No. 13 (Ruko Kobexindo), Kelurahan Ancol, Kecamatan Pademangan, Kota Jakarta Utara, DKI Jakarta, 14430</Text>
                </Box>

                <MapWithNoSSR />
                {/* <MapComponent /> */}
            </Box>
        </Box >
    )
}