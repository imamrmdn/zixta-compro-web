import Image from "next/image"
import { Box, Text, Heading } from "@chakra-ui/react"
import Slider from "react-slick"

import Foto1Image from 'assets/foto-1.jpeg'
import Foto2Image from 'assets/foto-2.jpeg'
import Foto3Image from 'assets/foto-3.jpeg'

import styles from 'src/styles/Home.module.css'

const settings = {
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
};

export default function HomeCarousel() {
    return (
        <Box className={styles.companyCarousel}>
            <Heading as='h2' size='lg'>Zixta Logistics Services</Heading>
            <Box my="2">Your Logistics Partner - Delivery on Time</Box>
            <Box className={styles.carouselWrapper}>
                <Slider {...settings}>
                    <Box className={styles.carouselSlider}>
                        <Card className={styles.carouselText} title="Zixta Logistics Services" desc="YOUR LOGISTICS PARTNER – DELIVERY ON TIME" />
                        <Image
                            src={Foto1Image}
                            alt="foto-1"
                            layout="responsive"
                            width="100%"
                            height="45%"
                        />
                    </Box>
                    <Box className={styles.carouselSlider}>
                        <Card className={styles.carouselText} title="Zixta Logistics Services" desc="YOUR LOGISTICS PARTNER – DELIVERY ON TIME" />
                        <Image
                            src={Foto2Image}
                            alt="foto-2"
                            layout="responsive"
                            width="100%"
                            height="45%"
                        />
                    </Box>
                    <Box className={styles.carouselSlider}>
                        <Card className={styles.carouselText} title="Zixta Logistics Services" desc="YOUR LOGISTICS PARTNER – DELIVERY ON TIME" />
                        <Image
                            src={Foto3Image}
                            alt="foto-3"
                            layout="responsive"
                            width="100%"
                            height="45%"
                        />
                    </Box>
                </Slider>
            </Box>
        </Box>
    )
}

function Card({ title, desc, ...rest }) {
    return (
        <Box p={3} shadow='md' backgroundColor="white" borderWidth='1px' borderLeft="10px solid" borderColor="#037dc6" borderRadius='10px' {...rest}>
            <Heading fontSize='md'>{title}</Heading>
            <Text mt={2} fontSize="sm" borderTopWidth="1px">{desc}</Text>
        </Box>
    )
}