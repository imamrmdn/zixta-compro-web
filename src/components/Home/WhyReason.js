import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import styles from 'src/styles/Home.module.css'

import juggernautImage from 'assets/jugger.jpg'

export default function WhyReason() {
    const [isCompanyReasonVisible, setisCompanyReasonVisible] = useState(false)

    const { messages } = useIntl()
    const companyReasonRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyReasonVisible(entry.isIntersecting)
        });

        observer.observe(companyReasonRef.current)
    }, [])

    return (
        <Box mt="10" padding="0px 0.5rem" ref={companyReasonRef} className={isCompanyReasonVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Box className={styles.companyReason}>
                <Heading as='h2' size='lg' textAlign='center'>
                    {messages["company.why.title"]}
                </Heading>
                <Text fontSize="md" textAlign="justify" letterSpacing="wide" my="1">
                    {messages["company.why.reason"]}
                </Text>
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
                            <Heading as='h2' size='md'>
                                {messages["company.why.reason.title.1"]}
                            </Heading>
                            <Box className={styles.companyReasonItemSubTitle}>
                                {messages["company.why.reason.description.1"]}
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
                            <Heading as='h2' size='md'>
                                {messages["company.why.reason.title.2"]}
                            </Heading>
                            <Box className={styles.companyReasonItemSubTitle}>
                                {messages["company.why.reason.description.2"]}
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
                            <Heading as='h2' size='md'>
                                {messages["company.why.reason.title.3"]}
                            </Heading>
                            <Box className={styles.companyReasonItemSubTitle}>
                                {messages["company.why.reason.description.3"]}
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
                            <Heading as='h2' size='md'>
                                {messages["company.why.reason.title.4"]}
                            </Heading>
                            <Box className={styles.companyReasonItemSubTitle}>
                                {messages["company.why.reason.description.4"]}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
