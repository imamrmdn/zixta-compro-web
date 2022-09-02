import { useEffect, useRef, useState } from "react"
import {
    Box, Heading, Text,
    // Icon 
} from "@chakra-ui/react"
// import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons"
import { useIntl } from 'react-intl'

import styles from 'src/styles/Services.module.css'

export default function Superiority() {
    const [isCompanySuperiorityVisible, setisCompanySuperiorityVisible] = useState(false)

    const { messages } = useIntl()
    const companySuperiorityRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanySuperiorityVisible(entry.isIntersecting)
        });

        observer.observe(companySuperiorityRef.current)
    }, [])

    return (
        <Box w="100%" h="100%" position="relative">
            <Box className={styles.ourSuperiorityClip} />
            <Box mt="32" className={styles.ourSuperiority}>
                <Box ref={companySuperiorityRef} className={isCompanySuperiorityVisible && `animate__animated  animate__slideInLeft animate__slow`}>
                    <Heading mt="10" as='h2' size='lg'>{messages["company.superiority.title"]}</Heading>
                    <Box className={styles.companySuperiorityContainer}>
                        <Box className={styles.companySuperiorityItemWrapper}>
                            <Card
                                title={messages["company.superiority.title.1"]}
                                desc={messages["company.superiority.description.1"]}
                            />
                        </Box>

                        {/* <Icon as={ArrowForwardIcon} boxSize={7} my="auto" mx="1" className={styles.displayArrowForwardIcon} /> */}
                        {/* <Icon as={ArrowDownIcon} boxSize={7} my="1.5" mx="auto" className={styles.displayArrowDownIcon} /> */}

                        <Box className={styles.companySuperiorityItemWrapper}>
                            <Card
                                title={messages["company.superiority.title.2"]}
                                desc={messages["company.superiority.description.2"]}
                            />
                        </Box>

                        {/* <Icon as={ArrowForwardIcon} boxSize={7} my="auto" mx="1" className={styles.displayArrowForwardIcon} /> */}
                        {/* <Icon as={ArrowDownIcon} boxSize={7} my="1.5" mx="auto" className={styles.displayArrowDownIcon} /> */}

                        <Box className={styles.companySuperiorityItemWrapper}>
                            <Card
                                title={messages["company.superiority.title.3"]}
                                desc={messages["company.superiority.description.3"]}
                            />
                        </Box>

                        {/* <Icon as={ArrowForwardIcon} boxSize={7} my="auto" mx="1" className={styles.displayArrowForwardIcon} /> */}
                        {/* <Icon as={ArrowDownIcon} boxSize={7} my="1.5" mx="auto" className={styles.displayArrowDownIcon} /> */}

                        <Box className={styles.companySuperiorityItemWrapper}>
                            <Card
                                title={messages["company.superiority.title.4"]}
                                desc={messages["company.superiority.description.4"]}
                            />
                        </Box>

                        {/* <Icon as={ArrowForwardIcon} boxSize={7} my="auto" mx="0.5" className={styles.displayArrowForwardIcon} />
                    <Icon as={ArrowDownIcon} boxSize={7} my="1.5" mx="auto" className={styles.displayArrowDownIcon} />
                    <Box className={styles.companySuperiorityItemWrapper}>
                        <Card
                            title="Pesanan Selesai"
                            desc={`Mitra kami akan mengatur pesanan Anda. Anda juga bisa melacak pesanan dengan mudah`}
                        />
                    </Box> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


function Card({ title, desc, ...rest }) {
    return (
        <Box p={4} w="100%" shadow='md' borderWidth='1px' borderRadius='10px' {...rest}>
            <Heading fontSize='xl' textAlign="center" height="12">{title}</Heading>
            <Text mt={4} textAlign="center">{desc}</Text>
        </Box>
    )
}