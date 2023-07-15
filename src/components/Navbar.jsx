import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='h-[20vh] flex flex-row'>
      <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto md:px-4 text-black'>
        <ul className='flex flex-row md:gap-[2vh] md:text-3xl text-bold text-right'>
          <li className='p-3 cursor-pointer hover:scale-105 duration-300' >
            <Link to='/'>
            HOME
            </Link></li>
          <li className='p-3 cursor-pointer hover:scale-105 duration-300'>
            <Link to='/task1'>
              TASK1
            </Link>

          </li>
          <li className='p-3 cursor-pointer hover:scale-105 duration-300'>
            <Link to='/task2'> 
            TASK2
            </Link></li>
          <li className='p-3 cursor-pointer hover:scale-105 duration-300'>
            <Link to='/task3'>
            TASK3
            </Link></li>
        </ul>
      </div>

    </div>
  )
}
