import { Box, Text, Heading } from "@chakra-ui/react"

// import juggernautImage from 'assets/jugger.jpg'
// import styles from 'src/styles/Services.module.css'

export default function CareersComponent() {
    return (
        <Box style={{ width: '100%' }}>
            <Heading as='h2' size='lg' color="blue">Careers</Heading>
            <Text mt={4}>Apply Now!</Text>
            <Text mt={2}>Send your CV to recruitment.zixtalog@gmail.com</Text>
            <Text mt={2}>Join with us!</Text>
        </Box>
    )
}