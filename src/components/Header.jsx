import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';

function Header() {
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname ? 'font-bold' : '';
  };

  return (
    <div className='bg-[#0C132F] py-10'>
      <div className="flex rounded-full border-2 lg:mx-44 md:mx-16 mx-8 bg-navbar h-auto w-auto container items-center justify-between py-2">
        <div className='flex text-white gap-8 ml-8 item-center'>
          <Link to="/" className={`font-bold text-xl hover:scale-110 transition-all ${isPageActive('/')}`}>Z-Sharp</Link>
          <Link to="/technologies" className={`mt-[3px] hover:underline ${isPageActive('/technologies')}`}>Technologies</Link>
          <Link to="/purchase" className={`mt-[3px] hover:underline ${isPageActive('/purchase')}`}>Purchase</Link>
          <Link to="/about-us" className={`mt-[3px] hover:underline ${isPageActive('/about-us')}`}>About</Link>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;
