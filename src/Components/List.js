import React from "react";
import { Link } from 'react-router-dom';
import img from '../images/logo.png';


export default function List() {

    const continents = ["North America", "South America", "Oceania", "Europe", "Asia", "Africa"]
        .map(e => {
            return <Link to={`/List/${e}/Region`} key={e}>
                <div className=" listItem opacity-95 p-4 border w-50 bg-dark text-white text-center d-inline-block">
                    {e}   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div></Link>
        })
    return (
        <>
            <div style={{
                backgroundImage: `url("${img}")`
            }} > {continents}</div>

        </>
    )
}
