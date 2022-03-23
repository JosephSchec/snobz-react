import React, { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'

import './App.css';
import '../src/Styles/styles.css'
import TopNavbar from './Components/Navbars/TopNavbar';
import Map from './Components/Map';
import BottomNavbar from './Components/Navbars/BottomNavbar';

const About = lazy(() => import('./Components/Offcanvas/About'));
const ShopView = lazy(() => import('./Components/ShopView'));
const Continents = lazy(() => import('./Components/List/Continents'));
const Region = lazy(() => import('./Components/List/Region'));
const Cities = lazy(() => import('./Components/List/Cities'));
const Shops = lazy(() => import('./Components/List/Shops'));





function App() {

  return (<>

    <TopNavbar />
    <Routes>
      <Route index element={<Map center='' />} />
      <Route path='/:value' element={<Suspense fallback={<Spinner animation="border" />}><ShopView /></Suspense>} />

      <Route path='/About' element={<Suspense fallback={<Spinner animation="border" />}><About /></Suspense>} />

      <Route path='/List' element={<Suspense fallback={<Spinner animation="border" />}><Continents /></Suspense>} />
      <Route path='/List/:region' element={<Suspense fallback={<Spinner animation="border" />}><Region /></Suspense>} />
      <Route path='/List/:region/:city' element={<Suspense fallback={<Spinner animation="border" />}><Cities /></Suspense>} />
      <Route path='/List/:region/:city/:shop' element={<Suspense fallback={<Spinner animation="border" />}><Shops /></Suspense>} />

      <Route path='*' element={<Navigate to='/' replace='true' />} />
    </Routes>
    <Outlet />
    <BottomNavbar />
  </>

  );
}

export default App;
