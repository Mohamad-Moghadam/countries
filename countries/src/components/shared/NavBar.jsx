import React from 'react'
import { Link, Outlet } from 'react-router'

export default function NavBar() {
    return (
    <>
        <div className='fixed top-0 left-0 w-full flex justify-center items-center gap-6 p-4 bg-gray-800 text-white shadow-md z-50'>
            <Link to="/">Home</Link>
            <Link to="/countries">Countries</Link>
            <Link to="/about">About</Link>
        </div>
        <div className="pt-16">
            <Outlet />
        </div>
    </>
)}