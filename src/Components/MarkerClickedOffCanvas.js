import React, { useEffect, useState } from "react";
import { Offcanvas, Nav, Image, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux';


export default function MarkerClickedOffCanvas(props) {
    const { shopName, show, hide } = props;
    const [shop, setShop] = useState({});
    const [directions, setDirections] = useState('');

    const shops = useSelector(state => state.shops);
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        setShop(shops.find(store => store.Name === shopName));
    }, [shopName, shops]);
    
    function getDirections(shop) {
        navigator.geolocation.getCurrentPosition(pos => {
            setDirections(`https://www.google.com/maps/dir/${`${pos.coords.latitude},${pos.coords.longitude}`}/${shop.LatLong}`);
        });
    }
    if (loading) {
        return <Spinner animation="border" />;
    }
    return (
        <>
            {getDirections(shop)}
            <Offcanvas show={show} onHide={hide} placement="end">
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Header className="justify-content-center text-center"  >
                    <Offcanvas.Title className="fs-1"><u>{shop.Name}</u></Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="text-center offCanvasImg">
                        <Image
                            src={shop.Logo}
                            onError={e => e.currentTarget.src = ''}
                        />
                    </div>

                    <div className="fs-2">
                        <p><span>City : </span> <br /> {shop.City}</p>
                        <p><span>State/ Province/ Country : </span> <br /> {shop.Region}</p>
                        <p><span>Continent : </span> <br /> {shop.Continent}</p>
                        <p className="fs-5">Link :  <Nav.Link className="p-0 d-inline" href={shop.Link} target='_blank' >{shop.Name}</Nav.Link> Site</p>
                        <p className="fs-5">Directions :  <Nav.Link className="p-0 d-inline" href={directions} target='_blank' >Directions</Nav.Link></p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

