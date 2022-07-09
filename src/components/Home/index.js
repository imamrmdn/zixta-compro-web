import { Box, Heading } from "@chakra-ui/react"

import HomeCarousel from "./Carousel"
import WhyReason from './WhyReason'

export default function HomeComponent() {
    return (
        <Box>
            <Heading as='h2' size='lg' color="blue">Zixta Logistics Services</Heading>
            <Box my="2">Your Logistics Partner</Box>

            <HomeCarousel />
            <WhyReason />
        </Box>
    )
}
