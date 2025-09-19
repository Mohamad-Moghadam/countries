import React from 'react'

export default function Select({region, setRegion}) {
    return (
        <div className='w-6/12'>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className='w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500transition-all duration-200 cursor-pointer text-black h-12'>
                <option className='text-black'>
                    All Regions
                </option>
                <option className='text-black'>
                    Africa
                </option>
                <option className='text-black'>
                    Americas
                </option>
                <option className='text-black'>
                    Asia
                </option>
                <option className='text-black'>
                    Europe
                </option>
                <option className='text-black'>
                    Oceania
                </option>
            </select>
        </div>
)}
