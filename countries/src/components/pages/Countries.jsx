import React, { use, useEffect, useState } from 'react'
import { client } from '../lib'
import CountryCard from '../common/CountryCard'
import { Link } from 'react-router'
import Input from '../common/Input'
import { useForm } from 'react-hook-form'


export default function Countries() {
    const [data , setData] = useState([])
    const {register, watch } = useForm({
        defaultValues: {
            search: ""
        }
    })

    async function getData() {
        const response = await client.get("/all?fields=name,cca3,region,population")
        setData(response.data)
    }

    useEffect (() => {
        getData()
    },[])

    const searchedTerm = watch("search")

    const filteredCountries = data.filter(country => 
        country.name.common.toLowerCase().includes(searchedTerm.toLowerCase())
    )

    return (
        <>
            <div className='mt-14'>
                <Input placeholder = "search" register={register("search")}/>
            </div>
            <div className='grid grid-cols-3 bg-amber-50 mt-3.5'>

                {filteredCountries.map(country => (
                    <Link key={country.cca3} to={`/nation/${country.cca3}`}>
                        <CountryCard country={country}/>
                    </Link>
                ))}
            </div>
        </>
        
)}
