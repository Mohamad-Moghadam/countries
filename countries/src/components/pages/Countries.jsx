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
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-7'>
                <Input placeholder = "search" register={register("search")}/>
                <Select region={region} setRegion={setRegion}/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-50 mt-6 p-4 rounded-lg'>
                {filteredCountries.map(country => (
                    <Link key={country.cca3} to={`/nation/${country.cca3}`} className='focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl'>
                        <div className='bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:translate-y-1 transition-transform transition-shadow duration-200'>
                            <CountryCard country={country}/>
                        </div>
                    </Link>
                ))}
            </div>
        </>
        
)}
