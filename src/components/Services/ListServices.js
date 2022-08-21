import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import juggernautImage from 'assets/jugger.jpg'
import styles from 'src/styles/Services.module.css'

export default function ListServices() {
    const [isCompanyServicesVisible, setisCompanyServicesVisible] = useState(false)

    const { messages } = useIntl()
    const companyServicesRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyServicesVisible(entry.isIntersecting)
        });

        observer.observe(companyServicesRef.current)
    }, [])

    return (
        <Box className={styles.ourService}>
            <Heading as='h2' size='lg'>Services</Heading>
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
                        <Box ml="3" mr="1">
                            <Heading as='h2' size='md'>
                                {messages["company.services.title.1"]}
                            </Heading>
                            <Box className={styles.companyServicesItemSubTitle}>
                                {messages["company.services.description.1"]}
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
                        <Box ml="3" mr="1">
                            <Heading as='h2' size='md'>
                                {messages["company.services.title.2"]}
                            </Heading>
                            <Box className={styles.companyServicesItemSubTitle}>
                                {messages["company.services.description.2"]}
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
                        <Box ml="3" mr="1">
                            <Heading as='h2' size='md'>
                                {messages["company.services.title.3"]}
                            </Heading>
                            <Box className={styles.companyServicesItemSubTitle}>
                                {messages["company.services.description.3"]}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}