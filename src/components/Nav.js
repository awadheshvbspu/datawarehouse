import React from 'react';
import { navigationData } from '../data';

export default function Nav() {
  return (
    <nav>
    <ul className='flex gap-x-8'>
    {navigationData.map((item,i) =>{
      return(
        <li key={i}>
        <a href={item.href} >{item.name}</a>
        </li>
      )
    })}
    </ul>
    </nav>
  )
}

