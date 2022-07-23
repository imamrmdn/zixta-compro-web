import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"

import OurCustomer from "./OurCustomer"
import OurVendor from "./OurVendor"

import styles from 'src/styles/Profile.module.css'

export default function TrustedComponent() {
    const [isCompanyTrustedVisible, setisCompanyTrustedVisible] = useState(false)

    const companyTrustedRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyTrustedVisible(entry.isIntersecting)
        });

        observer.observe(companyTrustedRef.current)
    }, [])

    return (
        <Box mt="16" ref={companyTrustedRef} className={isCompanyTrustedVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign="center">Trusted By</Heading>
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