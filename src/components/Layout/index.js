import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Link from "next/link"
import Image from 'next/image'
import { Box, Button, Heading, IconButton, Menu, MenuList, MenuItem, MenuButton, useDisclosure } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'

import SmallNavbar from "./SmallNavbar"

import logoImage from 'assets/ga-diajak.jpg'

import styles from 'styles/Layout.module.css'

const navbarList = [{
    id: 'Home',
    path: '/'
},
{
    id: 'Profile',
    path: '/profile'
},
{
    id: 'Services',
    path: '/services'
},
{
    id: 'Careers',
    path: '/careers'
},
{
    id: 'Contact',
    path: '/contact'
}]

export default function Layout({ children }) {
    const { locale, asPath, pathname } = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isScroll, setIsScroll] = useState(false)

    const menuLocalePath = locale === "id-ID" ? "en-US" : "id-ID"
    const menuLocaleName = locale === "id-ID" ? "ID" : "EN"
    const menuItemLocaleName = locale === "id-ID" ? "EN" : "ID"

    useEffect(() => {
        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, [])


    const handleScroll = () => {
        if (window?.pageYOffset > 160) {
            setIsScroll(true)
        }
        if (window?.pageYOffset === 0) {
            setIsScroll(false)
        }
    }

    if (isOpen) {
        return <SmallNavbar onClose={onClose} />
    }

    return (
        <>
            <header className={isScroll ? styles.scrollContainer : styles.container}>
                <Box className={styles.companyNameContainer}>
                    <Box className={styles.companyNameWrapper}>
                        <Box w={55}>
                            <Image
                                src={logoImage}
                                alt="logo image"
                                layout='responsive'
                                width='10%'
                                height='10%'
                            />
                        </Box>
                        <Heading as='h2' size='md' marginLeft='0.5em' width="60%">
                            Zixta Logistics Services
                        </Heading>
                    </Box>
                    <Box className={styles.languageContainer}>
                        <Box as={Menu}>
                            <MenuButton as={Button} >
                                {menuLocaleName}
                            </MenuButton>
                            <MenuList p={0} minW="0" w={'55px'}>
                                {/* {[...locales].sort().map((locale) => {
                                const shortLocale = locale === "id-ID" ? "ID" : "EN"
                                return ( */}
                                <Link href={asPath} locale={menuLocalePath}>
                                    <MenuItem>
                                        {/* {shortLocale} */}
                                        {menuItemLocaleName}
                                    </MenuItem>
                                </Link>
                                {/* })} */}
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
                <Box className={styles.companyDescriptionContainer}>
                    <Box className={styles.companyDescriptionWrapper}>
                        <Box className={styles.companyDescriptionItem}>Contact Us</Box>
                        <Box className={styles.companyDescriptionItem}>Working Hours</Box>
                        <Box className={styles.companyDescriptionItem}>Email Us</Box>
                    </Box>
                </Box>
                <Box className={styles.navbarContainer}>
                    {navbarList.map(item => (
                        <Link href={item.path} key={item.id}>
                            <a className={pathname === item.path ? styles.activeLink : styles.nonActiveLink}>
                                {item.id}
                            </a>
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
                        width={200}
                        height={200}
                    // className={styles.footerImage}
                    />
                    <Heading size="md" style={{ margin: '0.25em 0px' }}>
                        PT Three Dot
                    </Heading>
                    <Box className={styles.footerAddress}>
                        Millennium Centennial Center, Level 38. Jl. Jendral Sudirman Kav.25, Jakarta Selatan - 12920
                    </Box>
                </Box>
                <Box className={styles.footerHelpWrapper}>
                    <Box className={styles.footerInfo}>
                        <Link href="/careers">
                            <Button leftIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                                Carrers
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button leftIcon={<ArrowForwardIcon />} colorScheme='blue' variant='outline'>
                                Contact Us
                            </Button>
                        </Link>
                    </Box>
                    <Box className={styles.footerCopyright}>
                        Copyright © 2022. PT Three Dot
                    </Box>
                </Box>
            </footer>
        </>
    )
}
