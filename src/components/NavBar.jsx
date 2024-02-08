import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const searchParamsData = searchParams.get("items");
  return (
    <nav className=' flex justify-between items-center px-20 border-b-[1px] border-[#ccc] mb-4'>
        <Link to="/" className={searchParamsData === ""? "active":""}>All</Link>
        <Link to="/?items=active" className={searchParamsData === 'active' ? "active":""}>Active</Link>
        <Link to="/?items=completed" className={searchParamsData === 'completed' ? "active":""}>Completed</Link>
    </nav>
  )
}

export default NavBar;