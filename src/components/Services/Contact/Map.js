import { useEffect } from "react"
import {
    Box,
    // Button, Text, Stack, Heading, FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Textarea 
} from "@chakra-ui/react"
// import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'
// import { CheckIcon } from '@chakra-ui/icons'
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from "leaflet";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from 'src/styles/Contact.module.css'

const f = {
    "features": [
        {
            "type": "Feature",
            "properties": {
                "PARK_ID": 960,
                "NAME": "Bearbrook Skateboard Park",
                "DESCRIPTIO": "Flat asphalt surface, 5 components"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.3372987731628, 45.383321536272049]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "PARK_ID": 1219,
                "NAME": "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
                "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.546518086577947, 45.467134581917357]
            }
        }
    ]
}

export default function MapComponent() {
    useEffect(() => {
        if (typeof window !== undefined) {
            let DefaultIcon = Leaflet.icon({
                iconUrl: icon.src,
                shadowUrl: iconShadow.src
            });

            Leaflet.Marker.prototype.options.icon = DefaultIcon;
        }
    }, [])

    if (typeof window !== undefined) {
        return (
            <Box p={5} mt="4" shadow='sm' className={styles.contactCardForm}>
                <MapContainer center={[
                    45.383321536272049,
                    -75.3372987731628
                ]} zoom={10} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {f.features.map(park => (
                        <Marker
                            key={park.properties.PARK_ID}
                            position={[
                                park.geometry.coordinates[1],
                                park.geometry.coordinates[0]
                            ]}
                        />
                    ))}
                </MapContainer>
            </Box>
        )
    }
}