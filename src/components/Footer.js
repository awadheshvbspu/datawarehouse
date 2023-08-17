import React from 'react';
import { footerData } from '../data';
import Copyright from './Copyright';

export default function Footer() {
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer>
      <div className='container mx-auto' data-aos='fade-up'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
          <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start'>
            <a href='#'>
              <img src={logo} alt='' className='mb-[65px]'/>
            </a>
            <div className='max-w-[260px] mb-5 text-primary font-bold'>{address}</div>
            <div className='font-light italic'>{email}</div>
            <div className='font-light italic'>{phone}</div>
          </div>
          <div className='flex flex-1 flex-col gap-y-12 xl:flex-row justify-between'>
            <div className=''>
              <div className='font-extrabold text-primary mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                {list1.map((item, i) => {
                  return (
                    <li>
                      <a href={item.href} className='text-primary'>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className=''>
              <div className='font-extrabold text-primary mb-8'>Help</div>
              <ul className='flex flex-col gap-y-4'>
                {list2.map((item, i) => {
                  return (
                    <li>
                      <a href={item.href} className='text-primary'>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className=''>
              <div className='font-extrabold text-primary mb-8'>Social Media</div>
              <ul className='flex gap-4 justify-center'>
                {socialList.map((item, i) => {
                  return (
                    <li key={i} className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'>
                      <a href={item.href} className='text-gray-600 text-xl hover:text-white'>{item.icon}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
<Copyright/>
    </footer>
  )
}

