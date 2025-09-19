import React from 'react'

export default function Select({region, setRegion}) {
    return (
        <div className='w-6/12 h-6'>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className='w-full h-full'>
                <option>
                    All Regions
                </option>
                <option>
                    Africa
                </option>
                <option>
                    Americas
                </option>
                <option>
                    Asia
                </option>
                <option>
                    Europe
                </option>
                <option>
                    Oceania
                </option>
            </select>
        </div>
)}
