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
        <div className='flex mt-32 mx-10 tex bg-amber-50 rounded-3xl text-black justify-between'>
            <section>
                <h1 className='p-10 text-6xl'>
                {info?.name?.common}
                </h1>
                <ul>
                    <li>
                        <h4 className='p-10 text-4xl'>
                            official name: {info?.name?.official}
                        </h4>
                    </li>
                    <li>
                        <h4 className='p-10 text-4xl'>
                            capital: {info?.capital}
                        </h4>
                    </li>
                    <li>
                        <h4 className='p-10 text-4xl'>
                            region: {info?.region}
                        </h4>
                    </li>
                    <li>
                        <h4 className='p-10 text-4xl'>
                            Subregion: {info?.subregion}
                        </h4>
                    </li>
                    <li>
                        <h4 className='p-10 text-4xl'>
                            Population: {info?.population}
                        </h4>
                    </li>
                </ul>
            </section>
            <i className='text-[200px] block text-center self-center p-20'>
                {info?.flag}
            </i>
        </div>
)}
