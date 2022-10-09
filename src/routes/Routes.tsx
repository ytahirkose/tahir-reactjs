import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NotFound,
  Home,
  Detail
} from '../pages';
import { Routes } from 'react-router';
import { DefaultLayout } from '../containers';
import config from '../config';
import Loader from '../components/Loader/Loader';

const RouteList = (
  <Router basename={config.BASE_NAME}>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default RouteList;
