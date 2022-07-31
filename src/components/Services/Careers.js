import { useEffect, useRef, useState } from "react"
import { Box, Text, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

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
        <Box id="career">
            <Box ref={companyCareersRef} mt="16" className={isCompanyCareersVisible && `animate__animated  animate__slideInLeft animate__slow`} style={{ width: '100%' }}>
                <Heading as='h2' size='lg' color="blue">{messages["navbar.career"]}</Heading>
                <Text mt={4} ml={2}>Apply Now!</Text>
                <Text mt={2} ml={2}>{messages["career.text"]} recruitment.zixtalog@gmail.com</Text>
                <Text mt={2} ml={2}>{messages["career.join.us"]}</Text>
            </Box>
        </Box>
    )
}