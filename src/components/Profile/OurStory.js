import { Box, Text, Heading } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Profile.module.css'

export default function OurStory() {
    return (
        <Box mt="12" className={styles.ourStoryWrapper}>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ourStoryItem}
            >
                <Card title="Juggernaut" desc="Carry" />
            </Box>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ourStoryItem}
            >
                <Card title="Juggernaut" desc="Carry" />
            </Box>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ourStoryItem}
            >
                <Card title="Juggernaut" desc="Carry" />
            </Box>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ourStoryItem}
            >
                <Card title="Juggernaut" desc="Carry" />
            </Box>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p={5} w="100%" h="10%" shadow='md' backgroundColor="white" borderWidth='1px' borderLeft="10px solid blue" borderRadius='10px' {...rest}>
            <Heading fontSize='lg' height="7">{title}</Heading>
            <Text mt={4} borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}