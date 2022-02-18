
import React from "react";
import MyMarker from "./MyMarker";
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export default function AllMarkers() {

    const shops = useSelector(state => state.shops);
    const loading = useSelector(state => state.loading)

    if (loading) {
        return <Spinner animation="border" />;
    }
    return (<>
        {
            shops.map(e => {
                let lat = Number(e.LatLong.split(',')[0]);
                let lng = Number(e.LatLong.split(',')[1]);
                return <MyMarker key={e.LatLong + e.Name} position={[lat, lng]} placeHolder={e.Name} />
            })
        }
    </>
    )
}



