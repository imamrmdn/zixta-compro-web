import Link from "next/link"
import { useRouter } from "next/router"
import Image from 'next/image'
import { Box, Button, Heading, IconButton, Menu, MenuList, MenuItem, MenuButton, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import SmallNavbar from "./SmallNavbar"

import logoImage from 'assets/ga-diajak.jpg'

import styles from 'styles/Layout.module.css'

export default function Layout({ children }) {
    const { locale, asPath, pathname } = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const menuLocalePath = locale === "id-ID" ? "en-US" : "id-ID"
    const menuLocaleName = locale === "id-ID" ? "ID" : "EN"
    const menuItemLocaleName = locale === "id-ID" ? "EN" : "ID"

    if (isOpen) {
        return <SmallNavbar onClose={onClose} />
    }

    return (
        <>
            <header className={styles.container}>
                <Box className={styles.companyNameContainer}>
                    {/* <Box>Zixta Logistics Services</Box> */}
                    <Heading as='h2' size='lg' marginLeft='5px' width="60%">
                        Zixta Logistics Services
                    </Heading>
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
                    <Link href="/">
                        <a className={pathname === '/' ? styles.activeLink : styles.nonActiveLink}>
                            Home
                        </a>
                    </Link>
                    <Link href="/profile">
                        <a className={pathname === '/profile' ? styles.activeLink : styles.nonActiveLink}>
                            Profile
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className={pathname === '/services' ? styles.activeLink : styles.nonActiveLink}>
                            Services
                        </a>
                    </Link>
                    <Link href="/careers">
                        <a className={pathname === '/careers' ? styles.activeLink : styles.nonActiveLink}>
                            Careers
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={pathname === '/contact' ? styles.activeLink : styles.nonActiveLink}>
                            Contact Us
                        </a>
                    </Link>
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
                        <Box>
                            {"~~>"} Careers
                        </Box>
                        <Box>
                            {"~~>"} Contact Us
                        </Box>
                    </Box>
                    <Box className={styles.footerCopyright}>
                        Copyright © 2022. PT Three Dot
                    </Box>
                </Box>
            </footer>
        </>
    )
}
