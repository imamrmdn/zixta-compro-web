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
                <Card title="Ramadhan Rafsanjani" desc={`Co-Founder & COO`} />
            </Box>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ourStoryItem}
            >
                <Card title="Afifah Riska Ramadhanty" desc={`Financial Controler`} />
            </Box>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p={5} w="75%" h="10%" shadow='md' backgroundColor="white" borderWidth='1px' borderLeft="10px solid" borderColor="#037dc6" borderRadius='10px' {...rest}>
            <Heading fontSize='lg' height="7">{title}</Heading>
            <Text mt={4} borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}