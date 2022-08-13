import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import StoryComponent from "./Story"
import TrustedComponent from "./Trusted"
import Gallery from "./Gallery"
import OurPurpose from "./OurPurpose"

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Profile.module.css'

export default function ProfileComponent() {
    const [isCompanyTypeVisible, setisCompanyTypeVisible] = useState(false)

    const { messages } = useIntl()
    const companyTypeRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyTypeVisible(entry.isIntersecting)
        });

        observer.observe(companyTypeRef.current)
    }, [])

    return (
        <Box style={{ width: '100%' }}>
            <Heading as='h2' size='lg'>{messages["navbar.profile"]}</Heading>
            <OurPurpose />

            <StoryComponent />
            <Gallery />
            <TrustedComponent />

            <Box mt="16" ref={companyTypeRef} className={isCompanyTypeVisible && `animate__animated  animate__slideInLeft animate__slow`}>
                <Box className={styles.companyTypeWrapper}>
                    <Box
                        p={5}
                        backgroundImage={`url(${juggernautImage.src})`}
                        className={styles.companyTypeLeftImage}
                    />
                    <Box px={4} py={2} className={styles.companyTypeRightItem}>
                        <Heading as='h2' size='lg' className={styles.companyTypeRightTitle}>
                            Apakah Anda Mencari Layanan Logistik?
                        </Heading>
                        <Box className={styles.companyTypeRightDescription}>
                            Akses puluhan penyedia layanan pengiriman barang melalui jalur darat dan laut hingga pengurusan dokumen secara online!
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}