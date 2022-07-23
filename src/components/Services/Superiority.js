import { useEffect, useRef, useState } from "react"
import { Box, Heading, Text, Icon } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons"

import styles from 'src/styles/Services.module.css'

export default function Superiority() {
    const [isCompanySuperiorityVisible, setisCompanySuperiorityVisible] = useState(false)

    const companySuperiorityRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanySuperiorityVisible(entry.isIntersecting)
        });

        observer.observe(companySuperiorityRef.current)
    }, [])

    return (
        <Box ref={companySuperiorityRef} className={isCompanySuperiorityVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign="center" color="blue">Keunggulan</Heading>
            <Box className={styles.companySuperiorityContainer}>
                <Box className={styles.companySuperiorityItemWrapper}>
                    <Card
                        title="Cari Jadwal"
                        desc={`Tentukan jadwal & rute pengiriman darat atau laut Anda pada kotak pencarian kami`}
                    />
                </Box>
                <Icon as={ArrowForwardIcon} boxSize={7} color="blue.400" my="auto" mx="0.5" className={styles.displayArrowForwardIcon} />
                <Icon as={ArrowDownIcon} boxSize={7} color="blue.400" my="1.5" mx="auto" className={styles.displayArrowDownIcon} />
                <Box className={styles.companySuperiorityItemWrapper}>
                    <Card
                        title="Bandingkan Harga"
                        desc={`Pilih layanan logistik yang sesuai kebutuhan Anda dari berbagai mitra logistik terpercaya kami`}
                    />
                </Box>
                <Icon as={ArrowForwardIcon} boxSize={7} color="blue.400" my="auto" mx="0.5" className={styles.displayArrowForwardIcon} />
                <Icon as={ArrowDownIcon} boxSize={7} color="blue.400" my="1.5" mx="auto" className={styles.displayArrowDownIcon} />
                <Box className={styles.companySuperiorityItemWrapper}>
                    <Card
                        title="Pesan Langsung"
                        desc={`Periksa kembali detail pesanan kemudian selesaikan proses pemesanan Anda`}
                    />
                </Box>
                <Icon as={ArrowForwardIcon} boxSize={7} color="blue.400" my="auto" mx="0.5" className={styles.displayArrowForwardIcon} />
                <Icon as={ArrowDownIcon} boxSize={7} color="blue.400" my="1.5" mx="auto" className={styles.displayArrowDownIcon} />
                <Box className={styles.companySuperiorityItemWrapper}>
                    <Card
                        title="Bayar Aman"
                        desc={`Tim kami akan segera menghubungi Anda untuk proses pembayaran yang aman & transparan`}
                    />
                </Box>
                <Icon as={ArrowForwardIcon} boxSize={7} color="blue.400" my="auto" mx="0.5" className={styles.displayArrowForwardIcon} />
                <Icon as={ArrowDownIcon} boxSize={7} color="blue.400" my="1.5" mx="auto" className={styles.displayArrowDownIcon} />
                <Box className={styles.companySuperiorityItemWrapper}>
                    <Card
                        title="Pesanan Selesai"
                        desc={`Mitra kami akan mengatur pesanan Anda. Anda juga bisa melacak pesanan dengan mudah`}
                    />
                </Box>
            </Box>
        </Box>
    )
}


function Card({ title, desc, ...rest }) {
    return (
        <Box p={5} w="100%" shadow='md' borderWidth='1px' borderRadius='10px' {...rest}>
            <Heading fontSize='xl' textAlign="center" height="12">{title}</Heading>
            <Text mt={4} textAlign="center">{desc}</Text>
        </Box>
    )
}