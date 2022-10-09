import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import './DefaultLayout.scss';

const DefaultLayout: React.FC = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const [inDeep, setInDeep] = useState(false)

  const setUpButtonVisibility = () => {
    window.pageYOffset > 180 ? setInDeep(true) : setInDeep(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", setUpButtonVisibility, false);
  }, []);

  return (
    <div style={{position: 'relative'}} ref={scroller}>
      <header className={'pb-5'}>
          header
      </header>
      <Outlet/>
      <i className={`bi bi-arrow-up-circle up-button ${inDeep ? 'show-up-button' : 'hide-up-button'}`}
         onClick={() => window.scrollTo(0, 0)}
         title="Page Up">
      </i>
    </div>
  );
};

export default DefaultLayout;
