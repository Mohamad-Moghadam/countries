import React, { useEffect, useState } from 'react'
import { client } from '../lib'
import CountryCard from '../common/CountryCard'
import { Link } from 'react-router'


export default function Countries() {
    const [data , setData] = useState([])

    async function getData() {
        const response = await client.get("/all?fields=name,cca3,region,population")
        setData(response.data)
    }

    useEffect (() => {
        getData()
    },[])

    return (
        
        <div className='grid grid-cols-3 bg-amber-50 mt-3.5'>
            {data.map((country) => {
                return(
                    <Link key={country.cca3} to={`/nation/${country.cca3}`}>
                        <CountryCard country={country} />
                    </Link>
                    )
            })}
        </div>
)}
