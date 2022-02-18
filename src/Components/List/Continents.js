import React from "react";
import ListView from "./ListView";


export default function List() {

    const continents = ["North America", "South America", "Oceania", "Europe", "Asia", "Africa"]
    
    return (
        <>
            <div className="list m-1" > {<ListView placesArr={continents} toLink={`List`} />}</div>

        </>
    )
}
