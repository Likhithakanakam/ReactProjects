import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'; 
import Navbar from './components/Navbar';
import OrderConfirmed from './components/OrderConfirmed';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
import Profile from './components/Profile';
const LazyAbout = React.lazy(()=>import('./components/About'))

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={
      <React.Suspense fallback="Page Laoding.....">
        <LazyAbout/>
      </React.Suspense>
      }
      />
      <Route path='orderConfirmed' element={<OrderConfirmed/>}/>
      <Route path='Products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path='FeaturedProducts' element={<FeaturedProducts/>}/>
        <Route path='NewProducts' element={<NewProducts/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
        <Route path=':UserID' element={<UserDetails/>}/>
      </Route>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;
