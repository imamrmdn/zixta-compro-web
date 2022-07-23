import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"

import CeoStory from "./CeoStory"
import OurStory from "./OurStory"

import styles from 'src/styles/Profile.module.css'

export default function StoryComponent() {
    const [isCompanyStoryVisible, setisCompanyStoryVisible] = useState(false)

    const companyStoryRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyStoryVisible(entry.isIntersecting)
        });

        observer.observe(companyStoryRef.current)
    }, [])

    return (
        <Box mt="8" ref={companyStoryRef} className={isCompanyStoryVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign='center'>
                Our Story
            </Heading>
            <Box className={styles.profileSubTitle}>
                Ayo berkenalan dengan kami lebih dekat!
            </Box>
            <Box className={styles.ourStoryContainer}>
                <CeoStory />
                <OurStory />
            </Box>
        </Box>
    )
}