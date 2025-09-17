import React from 'react'

export default function CountryCard({country}) {
    return (
        <div className='flex flex-col border-2 mt-2 mx-1 shadow-2xl text-black bg-[#1f807e]'>
            <h2 className='ml-3 text-3xl'>
                {country?.name?.common}
            </h2>
            <h3 className='ml-3 text-2xl'>
                {country?.region}
            </h3>
            <p className='ml-3 text-2xl'>
                population: {country.population}
            </p>
        </div>
)}
