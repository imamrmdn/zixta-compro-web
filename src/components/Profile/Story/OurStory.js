import { Box, Text, Heading } from "@chakra-ui/react"

import styles from 'src/styles/Profile.module.css'

export default function OurStory() {
    return (
        <Box mt="12" className={styles.ourStoryWrapper}>
            <Box className={styles.ourStoryItemWrapper}>
                <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                    <Box
                        backgroundImage={`url(/assets/profile.svg)`}
                        className={styles.ourStoryItem}
                    />
                </Box>
                <Card title="Ramadhan Rafsanjani" desc={`Co-Founder & COO`} className={styles.ourStoryCard} />
            </Box>

            <Box className={styles.ourStoryItemWrapper}>
                <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                    <Box
                        backgroundImage={`url(/assets/profile.svg)`}
                        className={styles.ourStoryItem}
                    />
                </Box>
                <Card title="Afifah Riska R" desc={`Financial Controler`} className={styles.ourStoryCard} />
            </Box>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p="2" shadow='md' {...rest}>
            <Heading fontSize='lg' height="3">{title}</Heading>
            <Text mt="4" borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}