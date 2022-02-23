import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ListView from "./ListView";

export default function Shops() {
    const { shop } = useParams();
    const shops = useSelector(state => state.shops);

    const shopsF = shops.filter(inShopsSelected => inShopsSelected.City === shop);
    const uniqueArr = new Set(shopsF.map(shop => shop.Name));
    const shopArr = [];
    uniqueArr.forEach(shop => shopArr.push(shop));
        return (<>
            <div className="overflow-auto m-1 list" > {<ListView placesArr={shopArr} />}</div>
           
        </>
        )
    

}

