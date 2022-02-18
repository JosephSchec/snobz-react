import React from 'react'
import { Link } from 'react-router-dom';

export default function ListView(props) {
    const { placesArr, toLink } = props;

    const displayLink = placesArr.map(e => {
        return <Link to={`/${toLink}/${e}`} key={e} >
            <div className=" listItem opacity-95 p-3 border w-50 bg-dark text-white text-center d-inline-block ">
                <span> {e}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right " viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
                </span>
            </div>
        </Link>
    });
    const displayNolink = placesArr.map(e => {
        return <div className=" listItem opacity-95 p-3 border w-50 bg-dark text-white text-center d-inline-block " key={e} >
            <span> {e}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right " viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            </span>
        </div>
    });
    return (
        <div>{toLink ? displayLink : displayNolink}</div>
    )
}
