import { useEffect, useRef, useState } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

import logoImage from 'assets/ga-diajak.jpg'

// import styles from 'src/styles/Home.module.css'

export default function History() {
    const [isCompanyHistoryVisible, setisCompanyHistoryVisible] = useState(false)

    const companyHistoryRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setisCompanyHistoryVisible(entry.isIntersecting)
        });

        observer.observe(companyHistoryRef.current)
    }, [])

    return (
        <Box mt="10" ref={companyHistoryRef} className={isCompanyHistoryVisible && `animate__animated  animate__slideInLeft animate__slow`}>
            <Box textAlign="center">
                <Image
                    src={logoImage}
                    alt="logo image"
                    width={175}
                    height={175}
                />
            </Box>

            <Heading as='h2' size='lg' textAlign='center' mt="4"
            >
                Sejarah Perusahaan
            </Heading>
            <Text fontSize="md" textAlign="justify" letterSpacing="wide" my="1">
                PT Zixta Logistics Services adalah perusahaan yang bergerak dalam bidang logistik, didirikan dan terletak di Jalan Enggano No.66, Gedung tjokro bersaudara, Tanjung priok, Jakarta utara, Pendiri PT Zixta Logistics Services adalah H. Priyo M. bersama H. Samsudin pada tahun 2008, dan komisaris yaitu Ika Yunita Isdiyanti yang memberikan kontribusinya dalam memberikan modal.
                Hingga saat ini karyawan yang bekerja di PT Zixta Logistics Services berjumlah 10-49 karyawan.
                Tujuan didirikannya perusahaan ini yaitu untuk menciptakan lapangan pekerjaan, memenuhi permintaan pasar logistik, meningkatkan perekonomian dan kesejahteraan, serta menjadi pelaku logostik (PL) dan penyedia jasa logistik (PJL) yang bersaing dan menguasai sektor logitsik dalam skala nasional.
                Bentuk badan usaha perusahaan ini adalah Perusahaan Terbatas (PT) dan berstatus sah dalam legalitas pendirian perusahaan. Target pasar pada PT Zixta Logistics Services adalah eksportir dan importir yang ingin mengirim barang dari shipment point – pelabuhan – pabrik.
            </Text>
            <Text fontSize="md" textAlign="justify" letterSpacing="wide">
                Dalam proses order yang akan berjalan eksportir dan eksportir diberikan pelayanan jasa costume clearance, PPJK dan trucking via darat laut maupun udara.
                PT Zixta Logistics Services dapat memaksimalkan pengiriman barang secara tepat waktu.
                Pada saat ini PT Zixta Logitsics Services telah bekerja sama dengan beberapa perushaan dalam pengurusan dokumen ekspor dan impor.
                PT Zixta Logistics Services dalam kegiatan ekspor sudah bekerja sama dengan perusahaan besar penghasil baja yang mengekspor ke Negara Australia, Vanuatu, Samoa, Papua Nugini, dan Tonga.
                Sedangkan dalam kegiatan Impor PT Zixta Logistics mempersiapkan kebutuhan dokumen dan mengirimkan barang impor yang berupa bahan baku seperti biji plastik, besi, dan plastict roll, selain itu terdapat barang impor yang dikirimkan berupa sparepart mesin, sandal plastik dan mesin-mesin pabrik lainnya.
            </Text>
        </Box>
    )
}