import { useEffect } from "react"
import { Box } from "@chakra-ui/react"
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from 'src/styles/Contact.module.css'

import 'leaflet/dist/leaflet.css';

const f = {
    "features": [
        {
            "id": 1,
            "name": "Head Office",
            "geometry": {
                "type": "Point",
                "coordinates": [-6.1103082, 106.8883753,]
            }
        },
        {
            "id": 2,
            "name": "Branch Office",
            "geometry": {
                "type": "Point",
                "coordinates": [-6.1233949, 106.848022]
            }
        },
        {
            "id": 3,
            "name": "Pool",
            "geometry": {
                "type": "Point",
                "coordinates": [-6.1241484, 106.9540262]
            }
        }
    ]
}

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;

export default function MapComponent() {
    useEffect(() => {
        (async function init() {
            delete Leaflet.Icon.Default.prototype._getIconUrl;

            Leaflet.Icon.Default.mergeOptions({
                iconRetinaUrl: iconRetinaUrl.src,
                iconUrl: icon.src,
                shadowUrl: iconShadow.src
            });
        })();
    }, []);

    return (
        <Box p={5} mt="4" shadow='sm' className={styles.contactCardForm}>
            <MapContainer center={[
                -6.1103082,
                106.8883753,
            ]} zoom={12} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {f.features.map(park => (
                    <Marker
                        key={park.id}
                        position={[
                            park.geometry.coordinates[0],
                            park.geometry.coordinates[1],
                        ]}
                    >
                        <Popup>
                            <Box as="p" textAlign="center">
                                {park.name}
                            </Box>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    )
}