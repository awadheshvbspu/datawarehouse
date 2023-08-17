import React from 'react';
import { navigationData } from '../data';

export default function NavMobile() {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
    {navigationData.map((item,i)=>{
   return(
    <li key={i}>
    <a href={item.href} className='text-white' >{item.name}</a>
    </li>
   )
    })}
    </ul>
  )
}

