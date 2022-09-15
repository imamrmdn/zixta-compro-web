import { Box, Text, Heading } from "@chakra-ui/react"

import styles from 'src/styles/Profile.module.css'

export default function CeoStory() {
    return (
        <>
            <Box className={styles.ceoStoryWrapper}>
                <Box className={styles.ceoStoryItem} />
            </Box>
            <Card
                title="Samsudin"
                desc={`Founder & CEO`}
                className={styles.ceoStoryNameCardLarge}
            />
        </>
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