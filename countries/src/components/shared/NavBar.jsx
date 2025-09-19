import React from 'react'
import { Link, Outlet } from 'react-router'
import Title from '../common/Title'

export default function NavBar() {
    return (
    <>
        <div className='fixed top-0 left-0 w-full flex flex-wrap md:flex-nowrap justify-start items-center gap-4 md:gap-6 p-4 md:p-6 bg-gray-800 text-white shadow-lg z-50'>
            <Title/>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/" className='hover:text-blue-400 transition-colors duration-200'>Home</Link>
            <Link to="/countries" className='hover:text-blue-400 transition-colors duration-200'>Countries</Link>
            <Link to="/about" className='hover:text-blue-400 transition-colors duration-200'>About</Link>
        </div>
        <div className="pt-20 md:pt-24">
            <Outlet />
        </div>
    </>
)}