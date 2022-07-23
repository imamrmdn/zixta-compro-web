import { Box, Text, Heading } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Profile.module.css'

export default function CeoStory() {
    return (
        <Box className={styles.ceoStoryWrapper}>
            <Box
                p={5}
                backgroundImage={`url(${juggernautImage.src})`}
                className={styles.ceoStoryItem}
            >
                <Card title="Juggernaut" desc="Carry" className={styles.ceoStoryNameCardLarge} />
            </Box>
            <Box className={styles.ceoStoryDescriptionWrapper}>
                <Card title="Juggernaut" desc="Carry" className={styles.ceoStoryNameCardSmall} />
                <CardStoryCeo
                    className={styles.ceoStoryDescriptionItem}
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </Box>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow='md' {...rest}>
            <Heading fontSize='lg' height="7">{title}</Heading>
            <Text mt={4} borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}

function CardStoryCeo({ desc, ...rest }) {
    return (
        <Box p={3} shadow='md' {...rest}>
            <Text>{desc}</Text>
        </Box>
    )
}