
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
const usLat = 37.090200;
const usLng = -95.712900;



export default function ChangeMapView(props) {
    const { newView } = props;
    const [center, setCenter] = useState([usLat, usLng]);
    const [centerChanged, setCenterChanged] = useState(false);

    function getCurr() {
        navigator.geolocation.getCurrentPosition(changeView);

    }

    function changeView(pos) {
        setCenter([pos.coords.latitude, pos.coords.longitude]);
        setCenterChanged(true);
    }
    useEffect(() => {
        if (newView === '' || newView === null || newView === undefined) {
            getCurr();
        } else if (newView !== center) {
            setCenter(newView);
            setCenterChanged(true);

        }
    }, [])
    const map = useMap();
    if (centerChanged) {
        map.setView(center, 8);
    } else {
        map.setView(center, 3)
    }

    return null;
}

