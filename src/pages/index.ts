import React from 'react';

const NotFound = React.lazy(() => import('./NotFound/NotFound'));
const Home = React.lazy(() => import('./Home/Home'));
const Detail = React.lazy(() => import('./Detail/Detail'));

export {
  NotFound,
  Home,
  Detail
};
