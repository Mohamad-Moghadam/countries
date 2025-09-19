import React from 'react'

export default function Input({placeholder , register}) {
    return (
        <div className='border-b-green-300 p-3 w-6/12 bg-emerald-900'>
            <input type="text" placeholder={placeholder} {...register} className='border-amber-50 w-full'/>
        </div>
)}
