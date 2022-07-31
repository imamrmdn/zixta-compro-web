import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Home.module.css'

export default function Partner() {
    const [isCompanyPartnerVisible, setisCompanyPartnerVisible] = useState(false)

    const { messages } = useIntl()
    const companyPartnerRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyPartnerVisible(entry.isIntersecting)
        });

        observer.observe(companyPartnerRef.current)
    }, [])

    return (
        <Box mt="8" ref={companyPartnerRef} className={isCompanyPartnerVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' mb="2" size='lg' textAlign='center'>
                {messages["company.partner"]}
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
        </Box>
    )
}