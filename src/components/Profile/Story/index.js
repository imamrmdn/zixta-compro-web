import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import CeoStory from "./CeoStory"
import OurStory from "./OurStory"

import styles from 'src/styles/Profile.module.css'

export default function StoryComponent() {
    const [isCompanyStoryVisible, setisCompanyStoryVisible] = useState(false)

    const { messages } = useIntl()
    const companyStoryRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyStoryVisible(entry.isIntersecting)
        });

        observer.observe(companyStoryRef.current)
    }, [])

    return (
        <Box w="100%" h="100%" position="relative">
            {/* <Box className={styles.ourStoryClip} /> */}
            <Box className={styles.ourStory}>
                <Box mt="8" ref={companyStoryRef} className={isCompanyStoryVisible && `animate__animated  animate__slideInLeft animate__slow`}>
                    <Heading as='h2' size='lg' textAlign='center'>
                        {messages["company.story"]}
                    </Heading>
                    <Box className={styles.profileSubTitle}>
                        {messages["company.story.title"]}
                    </Box>
                    <Box className={styles.ourStoryContainer}>
                        <CeoStory />
                        <OurStory />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}