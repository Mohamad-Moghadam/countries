import React from 'react'
import { Link } from 'react-router'

export default function NavBar() {
    return (
    <div className='felx justify-center items-center gap-[15px]'>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/about">About</Link>
    </div>
)}
