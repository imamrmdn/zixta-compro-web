import { useEffect, useRef, useState } from "react"
import { Box, Heading, OrderedList, ListItem } from "@chakra-ui/react"

import styles from 'src/styles/Profile.module.css'

export default function OurPurpose() {
    const [isCompanyPurposeVisible, setisCompanyPurposeVisible] = useState(false)

    const companyPurposeRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyPurposeVisible(entry.isIntersecting)
        });

        observer.observe(companyPurposeRef.current)
    }, [])

    return (
        <Box mt="8" ref={companyPurposeRef} className={isCompanyPurposeVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Box className={styles.ourPurposeContainer}>
                <Box className={styles.ourVisionWrapper}>
                    <Heading as='h2' mt="8" mb="2" size='lg' textAlign='center'>
                        Our Vision
                    </Heading>
                    <Box>
                        Menjadi perusahaan penyedia layanan jasa logistik yang berintegritas, berkualitas dan terkemuka di Indonesia, dengan senantiasa mengutamakan kepuasan konsumen, serta menjunjung tinggi kepercayaan mitra kerja.
                    </Box>
                </Box>
                <Box className={styles.ourMissionWrapper}>
                    <Heading as='h2' mt="8" mb="2" size='lg' textAlign='center'>
                        Our Mission
                    </Heading>
                    <OrderedList>
                        <ListItem fontWeight={600}>
                            <Heading as='h2' mt="2" size='md'>
                                Kualitas
                            </Heading>
                        </ListItem>
                        <Box>
                            Menyediakan pelayanan jasa logistik yang efektif dan efisien dalam meningkatkan kualitas saat proses pengiriman barang. Pelayanan yang berkualitas dapat memberikan tingkat terhadap konsumen.
                        </Box>

                        <ListItem fontWeight={600}>
                            <Heading as='h2' mt="2" size='md'>
                                Delivery on time
                            </Heading>
                        </ListItem>
                        <Box>
                            Memberikan pelayanan jasa logistik secara tepat waktu dalam melakukan pengiriman barang dari port to door maupun door to door.
                        </Box>

                        <ListItem fontWeight={600}>
                            <Heading as='h2' mt="2" size='md'>
                                Sumber daya manusia
                            </Heading>
                        </ListItem>
                        <Box>
                            Membuka lapangan pekerjaan serta mengembangkan sumber daya manusia yang berkompeten, berintegritas, cerdas dan loyal.
                        </Box>

                        <ListItem fontWeight={600}>
                            <Heading as='h2' mt="2" size='md'>
                                Aksesibilitas
                            </Heading>
                        </ListItem>
                        <Box>
                            Memberikan proses pengiriman barang yang mudah, ekonomis dan terpercaya sehingga para konsumen dapat menerima tingkat kualitas yang signifikan.
                        </Box>
                    </OrderedList>
                </Box>
            </Box>
        </Box>
    )
}