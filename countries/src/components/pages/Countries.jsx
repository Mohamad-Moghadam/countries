import React, { use, useEffect, useState } from 'react'
import { client } from '../lib'
import CountryCard from '../common/CountryCard'
import { Link } from 'react-router'
import Input from '../common/Input'
import { useForm } from 'react-hook-form'
import Select from '../common/Select'


export default function Countries() {
    const [data , setData] = useState([])
    const {register, watch } = useForm({
        defaultValues: {
            search: ""
        }
    })
    const [region, setRegion] = useState("All regions")

    async function getData() {
        const response = await client.get("/all?fields=name,cca3,region,population")
        setData(response.data)
    }

    useEffect (() => {
        getData()
    },[])

    const searchedTerm = watch("search")

    const filteredCountries = data.filter(country => {
        const matchedSearch = country.name.common.toLowerCase().includes(searchedTerm.toLowerCase())
        const matchedRegion = region === "All regions" || country.region == region
        return matchedSearch && matchedRegion
    })

    return (
        <>
            <div className='flex mt-7 items-center'>
                <Input placeholder = "search" register={register("search")}/>
                <Select region={region} setRegion={setRegion}/>
            </div>
            <div className='grid grid-cols-3 bg-amber-50 mt-3.5 pb-2.5'>
                {filteredCountries.map(country => (
                    <Link key={country.cca3} to={`/nation/${country.cca3}`}>
                        <CountryCard country={country}/>
                    </Link>
                ))}
            </div>
        </>
        
)}
