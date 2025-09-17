import React, { useEffect, useState } from 'react'
import { client } from '../lib'
import CountryCard from '../common/CountryCard'

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
        <div>
            {data.map((country) => {
                return <CountryCard key={country.cca3} country={country}/>
            })}
        </div>
)}
