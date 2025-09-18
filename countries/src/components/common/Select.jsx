import React from 'react'

export default function Select({region, setRegion}) {
    return (
        <div>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
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
