import { useEffect, useRef, useState } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useIntl } from 'react-intl'

import logoImage from 'assets/ga-diajak.jpg'

// import styles from 'src/styles/Home.module.css'

export default function History() {
    const [isCompanyHistoryVisible, setisCompanyHistoryVisible] = useState(false)

    const { messages } = useIntl()
    const companyHistoryRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyHistoryVisible(entry.isIntersecting)
        });

        observer.observe(companyHistoryRef.current)
    }, [])

    return (
        <Box mt="10" padding="0px 0.5rem" ref={companyHistoryRef} className={isCompanyHistoryVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Box textAlign="center">
                <Image
                    src={logoImage}
                    alt="logo image"
                    width={175}
                    height={175}
                />
            </Box>

            <Heading as='h2' size='lg' textAlign='center' mt="4">
                {messages["company.history"]}
            </Heading>
            <Text fontSize="md" textAlign="justify" letterSpacing="wide" my="1">
                {messages["company.history.1"]}
            </Text>
            <Text fontSize="md" textAlign="justify" letterSpacing="wide">
                {messages["company.history.2"]}
            </Text>
        </Box>
    )
}