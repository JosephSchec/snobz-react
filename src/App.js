import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import '../src/Styles/styles.scss'
import TopNavbar from './Components/TopNavbar';
import Map from './Components/Map';
import BottomNavbar from './Components/BottomNavbar';
import About from './Components/About';
import ShopView from './Components/ShopView';
import List from './Components/List';
import Region from './Components/Region';

function App() {
  
  return (<>

    <TopNavbar />
    <Routes>
      <Route index element={<Map center='' />} />
      <Route path='/:value' element={<ShopView />} />
      <Route path='/About' element={<About />} />
      <Route path='/List' element={<List />} />
      <Route path='/List/:continent/Region' element={<Region />} />
      <Route path='*' element={<Navigate to='/' replace='true' />} />
    </Routes>
    <Outlet />
    <BottomNavbar />
  </>

  );
}

export default App;
