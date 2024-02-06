import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className=' flex justify-between items-center px-20 border-b-[1px] border-[#ccc] mb-4'>
        <Link className=' text-[20px] text-[#ccc]' to="/">All</Link>
        <Link className=' text-[20px] text-[#ccc]'to="/?todo=active">Active</Link>
        <Link className=' text-[20px] text-[#ccc]' to="/?todo=completed">Completed</Link>
    </nav>
  )
}

export default NavBar;