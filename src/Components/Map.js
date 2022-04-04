import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
//import icon from 'leaflet/dist/images/marker-icon.png';
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import marker from '../images/marker.png'
import ChangeMapView from './ChangeMapView';
import AllMarkers from './AllMarkers';

let DefaultIcon = L.icon({
    iconUrl: marker,
    iconSize:[30,50]
   // shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
export default function Map(props) {
    const { center } = props;
    const bounds = [
        [-90, -180],
        [90, 180]
    ];



    return (<>
        <MapContainer className='map'
            maxBounds={bounds}
            minZoom={3}
            scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' noWrap='true'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapView newView={center} />
            <AllMarkers />
        </MapContainer>
    </>)
}
