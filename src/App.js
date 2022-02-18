import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import '../src/Styles/styles.scss'
import TopNavbar from './Components/Navbars/TopNavbar';
import Map from './Components/Map';
import BottomNavbar from './Components/Navbars/BottomNavbar';
import About from './Components/Offcanvas/About';
import ShopView from './Components/ShopView';
import Continents from './Components/List/Continents';
import Region from './Components/List/Region';

function App() {

  return (<>

    <TopNavbar />
    <Routes>
      <Route index element={<Map center='' />} />
      <Route path='/:value' element={<ShopView />} />
      <Route path='/About' element={<About />} />
      <Route path='/List' element={<Continents />} />
      <Route path='/List/:continent/Region' element={<Region />} />
      <Route path='*' element={<Navigate to='/' replace='true' />} />
    </Routes>
    <Outlet />
    <BottomNavbar />
  </>

  );
}

export default App;
