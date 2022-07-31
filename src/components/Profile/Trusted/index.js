import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import OurCustomer from "./OurCustomer"
import OurVendor from "./OurVendor"

import styles from 'src/styles/Profile.module.css'

export default function TrustedComponent() {
    const [isCompanyTrustedVisible, setisCompanyTrustedVisible] = useState(false)

    const { messages } = useIntl()
    const companyTrustedRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyTrustedVisible(entry.isIntersecting)
        });

        observer.observe(companyTrustedRef.current)
    }, [])

    return (
        <Box mt="16" ref={companyTrustedRef} className={isCompanyTrustedVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign="center">Trusted By</Heading>
            <Box className={styles.profileSubTitle}>
                {messages["company.trusted.title"]}
            </Box>

            <Heading as='h2' mt="16" size='md' textAlign='center'>
                {messages["company.customer"]}
            </Heading>
            <OurCustomer />

            <Heading as='h2' mt="16" size='md' textAlign='center'>
                {messages["company.vendor"]}
            </Heading>
            <OurVendor />
        </Box>
    )
}