import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ThreatMap = () => {
    const threats = [
        { id: 1, position: [51.505, -0.09], description: 'Threat 1' },
        { id: 2, position: [51.51, -0.1], description: 'Threat 2' },
        { id: 3, position: [51.51, -0.12], description: 'Threat 3' },
    ];

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {threats.map(threat => (
                <Marker key={threat.id} position={threat.position}>
                    <Popup>{threat.description}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ThreatMap;