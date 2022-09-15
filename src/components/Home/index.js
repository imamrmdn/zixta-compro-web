import { Box } from "@chakra-ui/react"

import HomeCarousel from "./Carousel"
import WhyReason from './WhyReason'
// import Partner from "./Partner"
import History from "./History"

// import juggernautImage from 'assets/jugger.jpg'

// import styles from 'src/styles/Home.module.css'

export default function HomeComponent() {
    return (
        <Box>
            <HomeCarousel />
            <History />
            <WhyReason />
            {/* <Partner /> */}
        </Box>
    )
}