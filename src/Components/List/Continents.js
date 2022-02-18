import React from "react";
import img from '../../images/logo.png';
import ListView from "./ListView";


export default function List() {

    const continents = ["North America", "South America", "Oceania", "Europe", "Asia", "Africa"]
     
    return (
        <>
            <div style={{
                backgroundImage: `url("${img}")`
            }} > {<ListView placesArr={continents}/>}</div>

        </>
    )
}
