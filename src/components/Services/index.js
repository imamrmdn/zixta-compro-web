import { Box } from "@chakra-ui/react"

import ListServices from "./ListServices"
import Superiority from "./Superiority"
import Careers from "./Careers"
import Contact from "./Contact"

export default function ServicesComponent() {
    return (
        <Box style={{ width: '100%' }}>
            <ListServices />
            <Superiority />
            <Careers />
            <Contact />
        </Box>
    )
}