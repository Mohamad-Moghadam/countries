import React from 'react'

export default function CountryCard({country}) {
    return (
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2 hover:shadow-xl hover:translate-y-1 transition-transform transition-shadow duration-200'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-900'>
                {country?.name?.common}
            </h2>
            <h3 className='text-md md:text-lg text-gray-700'>
                {country?.region}
            </h3>
            <p className='text-sm md:text-base text-gray-600'>
                population: {country.population.toLocaleString()}
            </p>
        </div>
)}
