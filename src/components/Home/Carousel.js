import Image from "next/image"
import { Box } from "@chakra-ui/react"
import Slider from "react-slick"

import juggernautImage from 'assets/jugger.jpg'
import shadowFiendImage from 'assets/sf.jpg'

const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
};

export default function HomeCarousel() {
    return (
        <Box style={{ height: '40rem' }}>
            <Slider {...settings}>
                <Box w={100}>
                    <Image
                        src={juggernautImage}
                        alt="jugger image"
                        layout="responsive"
                        width="100%"
                        height='45%'
                    />
                </Box>
                <Box w={100}>
                    <Image
                        src={shadowFiendImage}
                        alt="sf image"
                        layout="responsive"
                        width="100%"
                        height='45%'
                    />
                </Box>
            </Slider>
        </Box>
    )
}
