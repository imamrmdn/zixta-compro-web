import { useEffect, useRef, useState } from "react"
import { Box, Heading, OrderedList, ListItem } from "@chakra-ui/react"
import { useIntl } from 'react-intl'

import styles from 'src/styles/Profile.module.css'

export default function OurPurpose() {
    const [isCompanyPurposeVisible, setisCompanyPurposeVisible] = useState(false)

    const { messages } = useIntl()
    const companyPurposeRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setisCompanyPurposeVisible(entry.isIntersecting)
        });

        observer.observe(companyPurposeRef.current)
    }, [])

    return (
        <Box className={styles.ourPurpose}>
            <Heading as='h2' size='lg'>{messages["navbar.profile"]}</Heading>
            <Box mt="8" ref={companyPurposeRef} className={isCompanyPurposeVisible && `animate__animated  animate__slideInLeft animate__slow`}>
                <Box className={styles.ourPurposeContainer}>
                    <Box className={styles.ourVisionWrapper}>
                        <Heading as='h2' mt="8" mb="2" size='lg' textAlign='center'>
                            {messages["company.vision"]}
                        </Heading>
                        <Box>
                            {messages["company.vision.description"]}
                        </Box>
                    </Box>
                    <Box className={styles.ourMissionWrapper}>
                        <Heading as='h2' mt="8" mb="2" size='lg' textAlign='center'>
                            {messages["company.mission"]}
                        </Heading>
                        <OrderedList>
                            <ListItem fontWeight={600}>
                                <Heading as='h2' mt="2" size='md'>
                                    {messages["company.mission.title.1"]}
                                </Heading>
                            </ListItem>
                            <Box>
                                {messages["company.mission.description.1"]}
                            </Box>

                            <ListItem fontWeight={600}>
                                <Heading as='h2' mt="2" size='md'>
                                    {messages["company.mission.title.2"]}
                                </Heading>
                            </ListItem>
                            <Box>
                                {messages["company.mission.description.2"]}
                            </Box>

                            <ListItem fontWeight={600}>
                                <Heading as='h2' mt="2" size='md'>
                                    {messages["company.mission.title.3"]}
                                </Heading>
                            </ListItem>
                            <Box>
                                {messages["company.mission.description.3"]}
                            </Box>

                            <ListItem fontWeight={600}>
                                <Heading as='h2' mt="2" size='md'>
                                    {messages["company.mission.title.4"]}
                                </Heading>
                            </ListItem>
                            <Box>
                                {messages["company.mission.description.4"]}
                            </Box>

                        </OrderedList>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}