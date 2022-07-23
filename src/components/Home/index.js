import { Box, Heading } from "@chakra-ui/react"

import HomeCarousel from "./Carousel"
import WhyReason from './WhyReason'
import Partner from "./Partner"
import History from "./History"

// import juggernautImage from 'assets/jugger.jpg'

// import styles from 'src/styles/Home.module.css'

export default function HomeComponent() {
    return (
        <Box>
            <Heading as='h2' size='lg' color="blue">Zixta Logistics Services</Heading>
            <Box my="2">Your Logistics Partner - Delivery on Time</Box>

            <HomeCarousel />
            <History />
            <WhyReason />
            <Partner />
        </Box>
    )
}