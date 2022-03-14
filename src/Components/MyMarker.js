import React, { useState } from 'react'
import { Marker, Tooltip } from 'react-leaflet';
import MarkerClickedOffCanvas from './MarkerClickedOffCanvas';
export default function MyMarker(props) {
    const { position, placeHolder } = props;
    const [shopName, setShopName] = useState('');
    const [show, setShow] = useState(false);

    const closeOffCanvas = () => setShow(!show);
    const clicked = (e) => {
        setShopName(e.target.options.value);
        setShow(true);
    }
    return (<>
        {shopName && <MarkerClickedOffCanvas shopName={shopName} show={show} hide={closeOffCanvas} />}
        <Marker value={placeHolder} position={position}
            eventHandlers={{
                click: clicked
            }} >
            <Tooltip direction="top" >{placeHolder}</Tooltip>
        </Marker>
    </>
    )
}
