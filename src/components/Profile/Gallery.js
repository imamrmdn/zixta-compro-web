import { useEffect, useRef, useState } from "react"
import { Box, Heading } from "@chakra-ui/react"

import juggernautImage from 'assets/jugger.jpg'

import styles from 'src/styles/Profile.module.css'

export default function Gallery() {
    const [isCompanyGalleryVisible, setisCompanyGalleryVisible] = useState(false)

    const companyGalleryRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyGalleryVisible(entry.isIntersecting)
        });

        observer.observe(companyGalleryRef.current)
    }, [])

    return (
        <Box mt="12" ref={companyGalleryRef} className={isCompanyGalleryVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Heading as='h2' size='lg' textAlign="center">Gallery</Heading>
            <Box mt="8" className={styles.galleryWrapper}>
                <Box
                    p={5}
                    backgroundImage={`url(${juggernautImage.src})`}
                    className={styles.galleryItem}
                />
                <Box
                    p={5}
                    backgroundImage={`url(${juggernautImage.src})`}
                    className={styles.galleryItem}
                />
                <Box
                    p={5}
                    backgroundImage={`url(${juggernautImage.src})`}
                    className={styles.galleryItem}
                />
                <Box
                    p={5}
                    backgroundImage={`url(${juggernautImage.src})`}
                    className={styles.galleryItem}
                />
            </Box>
        </Box>
    )
}