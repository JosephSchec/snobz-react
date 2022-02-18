import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from './Map';
export default function ShopView() {

    const [found, setFound] = useState({ LatLong: null });
    const shops = useSelector(state => state.shops);
    const { value } = useParams();
    
    useEffect(() => {
        try {
            if (shops.length > 0) {
                const searchElem = value.toLowerCase().trim();

                let foundShop = shops.find(store => store.Name.toLowerCase().trim() === searchElem ||
                    store.City.toLowerCase().trim() === searchElem ||
                    store.Region.toLowerCase().trim() === searchElem);
                setFound(foundShop);
            }

        } catch (e) {
            alert("Sorry Can't Find What You Are Looking For ... Please Check Your Spelling or Perhaps Give Feedback");

            console.error(e);
        }
    }, [value, shops])

    return (<>
        {found.LatLong === null ? <Map center={''} /> : <Map center={[Number(found.LatLong.split(',')[0]), Number(found.LatLong.split(',')[1])]} />}
    </>
    )


}
