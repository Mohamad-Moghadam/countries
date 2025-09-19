import React, { useEffect, useState } from 'react'
import { client } from '../lib'
import { useParams } from 'react-router'

export default function Nation() {
    const [info, setInfo] = useState(null)
    const { cca3 } = useParams()

    async function setData(cca3){
        const response = await client.get(`/alpha/${cca3}`)
        setInfo(response.data[0])
    }

    useEffect(() => {
        setData(cca3)
    }, [])


    return (
        <div className='mt-24 mx-auto max-w-6xl bg-white rounded-3xl shadow-md p-8 md:p-12 text-gray-900'>
            {info ? (
            <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
                <section className='flex-1'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-8'>
                    {info?.name?.common}
                    </h1>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-base md:text-lg'>
                        <li>
                            <span className='font-semibold'>
                                official name:{" "}
                            </span>
                            <span className='text-gray-700'>
                                {info?.name?.official}
                            </span>
                        </li>
                        <li>
                            <span className='font-semibold'>
                                Capital:{" "}
                            </span>
                            <span className='text-gray-700'>
                                {info?.capital}
                            </span>
                        </li>
                        <li>
                            <span className='font-semibold'>
                                Region:{" "}
                            </span>
                            <span className='text-gray-700'>
                                {info?.region}
                            </span>
                        </li>
                        <li>
                            <span className='font-semibold'>
                                Subregion:{" "}
                            </span>
                            <span className='text-gray-700'>
                                {info?.subregion}
                            </span>
                        </li>
                        <li>
                            <span className='font-semibold'>
                                Population:{" "}
                            </span>
                            <span className='text-gray-700'>
                                {info?.population?.toLocaleString()}
                            </span>
                        </li>
                    </ul>
                </section>
                <div className='flex justify-center items-center text-[120px] md:text-[160px] lg:text-[200px]'>
                    <i>
                        {info?.flag}
                    </i>
                </div>
            </div>
            ) : (
                <p className="text-center text-gray-500">Loading country data...</p>
            )}
        </div>
)}
