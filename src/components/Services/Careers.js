import { useEffect, useRef, useState } from "react"
import { Box, Text, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import styles from 'src/styles/Services.module.css'

export default function Careers() {
    const [isCompanyCareersVisible, setisCompanyCareersVisible] = useState(false)

    const { messages } = useIntl()
    const companyCareersRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyCareersVisible(entry.isIntersecting)
        });

        observer.observe(companyCareersRef.current)
    }, [])

    return (
        <Box className={styles.ourCareer}>
            <Box id="career" style={{ height: '7em' }} />
            <Box ref={companyCareersRef} className={isCompanyCareersVisible && `animate__animated  animate__slideInLeft animate__slow`} style={{ width: '100%' }}>
                <Heading as='h2' size='lg'>{messages["navbar.career"]}</Heading>
                <Text mt={4} color="#718096">Apply Now!</Text>
                <Text mt={2} color="#718096">{messages["career.text"]} <a href="mailto:recruitment.zixtalog@gmail.com" rel="noopener noreferrer" style={{ color: '#037dc6' }}>recruitment.zixtalog@gmail.com</a></Text>
                <Text mt={2} color="#718096">{messages["career.join.us"]}</Text>
            </Box>
        </Box>
    )
}