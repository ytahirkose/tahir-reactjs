import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NotFound,
  Home,
  Detail
} from '../pages';
import { Routes } from 'react-router';
import { DefaultLayout } from '../containers';
import Loader from '../components/Loader/Loader';
import Favourites from "../pages/Favourites/Favourites";

const BASE_NAME = '/';

const RouteList = (
  <Router basename={BASE_NAME}>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default RouteList;
