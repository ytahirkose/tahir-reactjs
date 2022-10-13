import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import './DefaultLayout.scss';
import {IconHome, IconUp} from "../../utils/Icons";
import {Link} from "react-router-dom";

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
    <div className={'bg-gray-50 min-h-screen'} ref={scroller}>
      <header className={'w-full bg-gray-800 py-3 px-12 mb-16 text-amber-50 flex justify-between'}>
          <div>
              <Link to='/home'>
                  <IconHome className={'h-10'} />
              </Link>
          </div>
          <div className={'flex items-center'}>
              <Link className={'px-3 py-1 mr-5 rounded shadow hover:bg-amber-100 hover:text-amber-700'} to='/favourites'>Favourites</Link>
          </div>
      </header>
      <Outlet/>
        <IconUp className={`up-button ${inDeep ? 'show-up-button' : 'hide-up-button'}`}
                onClick={() => window.scrollTo(0, 0)}
                title="Page Up" />
    </div>
  );
};

export default DefaultLayout;
