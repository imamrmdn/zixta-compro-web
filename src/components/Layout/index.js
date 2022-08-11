import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Link from "next/link"
import Image from 'next/image'
// import Chatra from '@chatra/chatra'
import { Box, Button, Heading, IconButton, Menu, MenuList, MenuItem, MenuButton, useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import {
    HamburgerIcon, PhoneIcon,
    // TimeIcon, 
    EmailIcon
} from '@chakra-ui/icons'
import { SolutionOutlined, YoutubeOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

import SmallNavbar from "./SmallNavbar"

// import logoImage from 'assets/ga-diajak.jpg'
import logoImage from 'assets/logo.png'

import styles from 'src/styles/Layout.module.css'

export default function Layout({ children }) {
    const { locale, asPath, push } = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { messages } = useIntl()

    const buttonFooterSize = useBreakpointValue(['sm', 'md'])

    const navbarList = [{
        id: messages["navbar.home"],
        path: '/'
    },
    {
        id: messages["navbar.profile"],
        path: '/profile'
    },
    {
        id: messages["navbar.services"],
        path: '/services'
    },
    {
        id: messages["navbar.career"],
        path: '/services#career'
    },
    {
        id: messages["navbar.contact"],
        path: '/services#contact'
    }]

    const [isScroll, setIsScroll] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);

    const menuLocalePath = locale === "id-ID" ? "en-US" : "id-ID"
    const menuLocaleName = locale === "id-ID" ? "ID" : "EN"
    const menuItemLocaleName = locale === "id-ID" ? "EN" : "ID"

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (window) {
            window.ChatraSetup = {
                disableChatOpenHash: true
            }
        }
    }, [])

    useEffect(() => {
        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = (e) => {
        const { scrollY } = e.currentTarget
        if (scrollY > 160) {
            setIsScroll(true)
        }
        if (scrollY === 0) {
            setIsScroll(false)
        }
    }

    const goToContact = () => {
        push('/contact')
    }

    if (!hasMounted) return null

    if (isOpen) {
        return <SmallNavbar onClose={onClose} />
    }

    return (
        <>
            <header className={isScroll ? styles.scrollContainer : styles.container}>
                <Box className={styles.companyNameContainer}>
                    <Box className={styles.companyNameWrapper}>
                        <Box className={styles.companyNameLogo}>
                            <Image
                                src={logoImage}
                                alt="logo image"
                            // layout='fixed'
                            // width={175}
                            // height={175}
                            // width='100%'
                            // height='100%'
                            />
                        </Box>
                        <Heading as='h2' size='md' marginLeft='0.5em' className={styles.companyNameTitle}>
                            Zixta Logistics Services
                        </Heading>
                    </Box>
                    <Box className={styles.languageContainer}>
                        <Box className={styles.companyDescriptionLargeContainer}>
                            <Box className={styles.companyDescriptionLargeWrapper}>
                                <Box className={styles.companyDescriptionLargeItem}><PhoneIcon onClick={goToContact} boxSize={5} cursor="pointer" /></Box>
                                {/* <Box className={styles.companyDescriptionLargeItem}><TimeIcon boxSize={5} /></Box> */}
                                <Box className={styles.companyDescriptionLargeItem}><EmailIcon boxSize={5} /></Box>
                            </Box>
                        </Box>
                        <Box as={Menu}>
                            <MenuButton as={Button} >
                                {menuLocaleName}
                            </MenuButton>
                            <MenuList p={0} minW="0" w={'55px'}>
                                <Link href={asPath} locale={menuLocalePath}>
                                    <MenuItem>
                                        {menuItemLocaleName}
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Box>
                        <Box className={`animate__animated animate__lightSpeedInLeft ${styles.hamburgerIcon}`}>
                            <IconButton
                                aria-label='Hamburger-icon'
                                variant="ghost"
                                onClick={onOpen}
                                icon={<HamburgerIcon w={6} h={6} />}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.companyDescriptionSmallContainer}>
                    <Box className={styles.companyDescriptionSmallWrapper}>
                        <Box className={styles.companyDescriptionSmallItem}>Contact Us</Box>
                        {/* <Box className={styles.companyDescriptionSmallItem}>Working Hours</Box> */}
                        <Box className={styles.companyDescriptionSmallItem}>Email Us</Box>
                    </Box>
                </Box>
                <Box mt="8" className={styles.navbarContainer}>
                    {navbarList.map(item => (
                        <Link href={item.path} key={item.id}>
                            {asPath &&
                                <a className={asPath === item.path ? styles.activeLink : styles.nonActiveLink}>
                                    {item.id}
                                </a>
                            }
                        </Link>
                    ))}
                </Box>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <Box className={styles.footerDescriptionWrapper}>
                    <Image
                        src={logoImage}
                        alt="logo image"
                        width={175}
                        height={175}
                    // className={styles.footerImage}
                    />
                    <Heading size="md" style={{ margin: '0.25em 0px' }}>
                        PT Zixta Logistics Services
                    </Heading>
                    <Box className={styles.footerAddress}>
                        Jl. Enggano No.66, RT.4/RW.16, Tj. Priok, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14310
                    </Box>
                </Box>
                <Box className={styles.footerHelpWrapper}>
                    <Box className={styles.footerInfo}>
                        <Link className={styles.footerInfoItem} href="/services#career">
                            <Button size={buttonFooterSize} leftIcon={<SolutionOutlined />} colorScheme='teal' variant='outline'>
                                {messages["navbar.career"]}
                            </Button>
                        </Link>
                        <Link className={styles.footerInfoItem} href="/services#contact">
                            <Button size={buttonFooterSize} leftIcon={<PhoneIcon />} colorScheme='blue' variant='outline'>
                                {messages["navbar.contact"]}
                            </Button>
                        </Link>
                        <a target="_blank" href="https://www.youtube.com/watch?v=hetoEq_vrMc&ab_channel=SoundsFromTheCorner" rel="noopener noreferrer">
                            <Button size={buttonFooterSize} leftIcon={<YoutubeOutlined />} colorScheme='blue' variant='outline'>
                                YouTube
                            </Button>
                        </a>
                    </Box>
                </Box>
                <Box className={styles.footerCopyright}>
                    Copyright © 2022. PT Zixta Logistics Services
                </Box>
            </footer>
        </>
    )
}
