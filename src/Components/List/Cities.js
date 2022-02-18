import React from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import ListView from "./ListView";

export default function City() {
const { region, city } = useParams();

  const shops = useSelector(state => state.shops);
  const loading = useSelector(state => state.loading)

  if (loading) {
    return <Spinner animation="border" />;
  }
  const citiesF = shops.filter(inCitiesSelected => inCitiesSelected.Region === city)
  const uniqueArr = new Set(citiesF.map(city => city.City));
  const citiesArr = [];
  uniqueArr.forEach(city => citiesArr.push(city));
  

  return (<>
    <div className="overflow-auto m-1 list"> {<ListView placesArr={citiesArr} toLink={`List/${region}/${city}`} />}</div>
  </>

  )

}

