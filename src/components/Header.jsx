import React from 'react';
import Dropdown from './Dropdown';

function Header() {
  return (
    <div className='bg-[#0C132F] py-10'>
      <div className="flex rounded-full border-2 lg:mx-44 md:mx-16 mx-8 bg-navbar h-auto w-auto container items-center justify-between py-2">
        <div className='flex text-white gap-8 ml-8 item-center'>
          <a href="/" className="font-bold text-xl hover:scale-110 transition-all">Z-Sharp</a>
          <a href="/technologies" className='mt-[3px]'>Technologies</a>
          <a href="/purchase" className='mt-[3px]'>Purchase</a>
          <a href="/about-us" className='mt-[3px]'>About</a>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>


  );
}

export default Header;
