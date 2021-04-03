import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapBox = ({ coordinates }) => {

    const position = [ coordinates.lat , coordinates.lon ]
    return (
        <MapContainer zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            dragging={false}
            center={[0 , 0]} 
            zoom={1.5} 
         >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapBox
