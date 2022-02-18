import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import img from '../images/logo.png';
import { useSelector } from 'react-redux'

export default function Region() {
  const { continent } = useParams();

  const shops = useSelector(state => state.shops);
  const loading = useSelector(state => state.loading)
  useEffect(() => {

  }, []);
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
    <div>{uniqueRegions}</div>
  </>

  )
}
