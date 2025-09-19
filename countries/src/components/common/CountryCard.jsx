import React from 'react'

export default function CountryCard({country}) {
    return (
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-xl hover:translate-y-1 transition-transform transition-shadow duration-200'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-900'>
                {country?.name?.common}
            </h2>
            <div className='flex flex-col gap-1 text-sm md:text-base'>
                <p className='text-gray-800'>
                    <span className='font-medium'>
                        Region:{" "}
                    </span>
                    <span className='text-gray-600'>
                        {country?.region}
                    </span>
                </p>
                <p className='text-sm md:text-base text-gray-600'>
                    <span className='font-medium'>
                        Population:{" "}
                    </span>
                    <span className='text-gray-600'>
                        {country.population.toLocaleString()}
                    </span>
                </p>
            </div>
            
        </div>
)}
