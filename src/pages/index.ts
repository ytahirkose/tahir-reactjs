import React from 'react';

const NotFound = React.lazy(() => import('./NotFound/NotFound'));
const Home = React.lazy(() => import('./Home/Home'));
const Detail = React.lazy(() => import('./Detail/Detail'));
const Favourites = React.lazy(() => import('./Favourites/Favourites'));

export {
  NotFound,
  Home,
  Detail,
  Favourites
};
