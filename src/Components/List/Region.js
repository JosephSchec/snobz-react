import React from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import ListView from "./ListView";

export default function Region() {
  const { continent } = useParams();

  const shops = useSelector(state => state.shops);
  const loading = useSelector(state => state.loading)

  if (loading) {
    return <Spinner animation="border" />;
  }

  /***
   * find regions in continent
   * set only unique 
   * turn set to array for mapping
   ***/

  const regions = shops.filter(inContinentSelected => inContinentSelected.Continent === continent)
  const uniqueArr = new Set(regions.map(region => region.Region));
  const mapRegionsArr = [];
  uniqueArr.forEach(region => mapRegionsArr.push(region));
  const uniqueRegions = mapRegionsArr.map(r => <div key={r}>{r}</div>);

  return (<>
    <div className="overflow-auto m-1"> {<ListView placesArr={uniqueRegions} />}</div>
  </>

  )
}
