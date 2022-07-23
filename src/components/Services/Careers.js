import { useEffect, useRef, useState } from "react"
import { Box, Text, Heading } from "@chakra-ui/react"

export default function Careers() {
    const [isCompanyCareersVisible, setisCompanyCareersVisible] = useState(false)

    const companyCareersRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyCareersVisible(entry.isIntersecting)
        });

        observer.observe(companyCareersRef.current)
    }, [])

    return (
        <Box id="career" mt="16" ref={companyCareersRef} className={isCompanyCareersVisible && `animate__animated  animate__slideInLeft animate__slow`} style={{ width: '100%' }}>
            <Heading as='h2' size='lg' color="blue">Career</Heading>
            <Text mt={4} ml={2}>Apply Now!</Text>
            <Text mt={2} ml={2}>Send your CV to recruitment.zixtalog@gmail.com</Text>
            <Text mt={2} ml={2}>Join with us!</Text>
        </Box>
    )
}