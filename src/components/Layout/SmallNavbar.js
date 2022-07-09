import { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import { Box, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import styles from 'styles/Layout.module.css'

export default function SmallNavbar({ onClose }) {
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (width === 768) {
            onClose()
        }
    }, [onClose, width])

    return (
        <Box className={styles.smallNavbarContainer}>
            <Box className={`animate__animated animate__lightSpeedInLeft ${styles.closeIcon}`}>
                <IconButton
                    aria-label='Close-icon'
                    variant="ghost"
                    onClick={onClose}
                    icon={<CloseIcon w={6} h={6} />}
                />
            </Box>
            <LinkItem href="/" name="Home" onClose={onClose} />
            <LinkItem href="/profile" name="Profile" onClose={onClose} />
            <LinkItem href="/services" name="Services" onClose={onClose} />
            <LinkItem href="/careers" name="Careers" onClose={onClose} />
            <LinkItem href="/contact" name="Contact Us" onClose={onClose} />
        </Box>
    )
}

const LinkItem = ({ href, name, onClose }) => {
    const { pathname } = useRouter()
    return (
        <Box style={{ margin: '1em 0px' }}>
            <Link href={href}>
                <a className={pathname === href ? styles.activeSmallLink : styles.nonActiveSmallLink} onClick={onClose}>
                    {name}
                </a>
            </Link>
        </Box>
    )
}
