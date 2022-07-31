import Image from "next/image"
import { Box, Text, Heading } from "@chakra-ui/react"
import Slider from "react-slick"

import juggernautImage from 'assets/jugger.jpg'
import shadowFiendImage from 'assets/sf.jpg'

import styles from 'src/styles/Home.module.css'

const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
};

export default function HomeCarousel() {
    return (
        <Box className={styles.carouselWrapper} >
            <Slider {...settings}>
                <Box className={styles.carouselSlider}>
                    <Card className={styles.carouselText} title="Zixta Logistics Services" desc="YOUR LOGISTICS PARTNER – DELIVERY ON TIME" />
                    <Image
                        src={juggernautImage}
                        alt="jugger image"
                        layout="responsive"
                        objectFit="cover"
                        width="100%"
                        height='75%'
                    />
                </Box>
                <Box className={styles.carouselSlider}>
                    <Card className={styles.carouselText} title="Zixta Logistics Services" desc="YOUR LOGISTICS PARTNER – DELIVERY ON TIME" />
                    <Image
                        src={shadowFiendImage}
                        alt="sf image"
                        layout="responsive"
                        objectFit="cover"
                        width="100%"
                        height='75%'
                    />
                </Box>
            </Slider>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p={3} shadow='md' backgroundColor="white" borderWidth='1px' borderLeft="10px solid blue" borderRadius='10px' {...rest}>
            <Heading fontSize='md'>{title}</Heading>
            <Text mt={2} fontSize="sm" borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}