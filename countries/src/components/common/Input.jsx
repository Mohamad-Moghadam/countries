import React from 'react'

export default function Input({placeholder , register}) {
    return (
        <div className='w-full sm:w-6/12'>
            <input type="text" placeholder={placeholder} {...register} className='w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'/>
        </div>
)}
