import React from 'react'

export default function Input({placeholder , register}) {
    return (
        <div className='border-b-green-300 p-3'>
            <input type="text" placeholder={placeholder} {...register}/>
        </div>
)}
