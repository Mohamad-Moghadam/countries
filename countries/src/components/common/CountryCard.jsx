import React from 'react'

export default function CountryCard({country}) {
    return (
        <div>
        <h2>
            {country?.name?.common}
        </h2>
        <h3>
            {country?.region}
        </h3>
        <p>
            population: {country.population}
        </p>
        </div>
)}
