import { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { useIntl } from 'react-intl'

import { Box, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import styles from 'src/styles/Layout.module.css'

export default function SmallNavbar({ onClose }) {
    const { messages } = useIntl()

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (width >= 768) {
            onClose()
        }
    }, [onClose, width])

    return (
        <Box className={`animate__animated animate__fadeIn ${styles.smallNavbarContainer}`}>
            {/* <Box className={`animate__animated animate__lightSpeedInLeft ${styles.closeIcon}`}>
                <IconButton
                    aria-label='Close-icon'
                    variant="ghost"
                    onClick={onClose}
                    icon={<CloseIcon w={6} h={6} />}
                />
            </Box> */}
            <LinkItem href="/" name={messages["navbar.home"]} onClose={onClose} />
            <LinkItem href="/profile" name={messages["navbar.profile"]} onClose={onClose} />
            <LinkItem href="/services" name={messages["navbar.services"]} onClose={onClose} />
            <LinkItem href="/services#career" name={messages["navbar.career"]} onClose={onClose} />
            <LinkItem href="/services#contact" name={messages["navbar.contact"]} onClose={onClose} />
        </Box>
    )
}

const LinkItem = ({ href, name, onClose }) => {
    const { asPath } = useRouter()
    return (
        <Box style={{ margin: '1em 0px 0px 2em', }}>
            <Link href={href}>
                <a className={asPath === href ? styles.activeSmallLink : styles.nonActiveSmallLink} onClick={onClose}>
                    {name}
                </a>
            </Link>
        </Box>
    )
}
