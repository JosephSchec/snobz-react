
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
const usLat = 37.090200;
const usLng = -95.712900;



export default function ChangeMapView(props) {
    const { newView } = props;
    const [center, setCenter] = useState([usLat, usLng]);
    
    function getCurr() {
        navigator.geolocation.getCurrentPosition(changeView);
    }

    function changeView(pos) {
        setCenter([pos.coords.latitude, pos.coords.longitude]);
    }
    useEffect(() => {
        if (newView === '' || newView === null || newView === undefined) {
            getCurr();
        } else if (newView !== center) {
            setCenter(newView);
        }
    }, [newView])
    const map = useMap();
    map.setView(center, 8);

    return null;
}

