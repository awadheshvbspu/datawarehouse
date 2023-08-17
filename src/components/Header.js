import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs'

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-down' data-aos-delay='400' data-aos-duration='1000'>
      <div className='container mx-auto'>
        <div className=' flex items-center justify-between relative'>
          <div className='flex items-center gap-x-[120px]'>
            <a href='#'>
              <img src={logo} alt='' />
            </a>
            <div className='hidden lg:flex'>
              <Nav />
            </div>
            <div className={`${navMobile ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden`}>
              <NavMobile />
            </div>

          </div>

          <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>Request Demo <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition duration-1000' /></button>
          <div className='lg:hidden txt-2xl text-primary cursor-pointer' onClick={() => setNavMobile(!navMobile)}>
            <FaBars size={25} />
          </div>
        </div>
      </div>
    </header>
  )
}
