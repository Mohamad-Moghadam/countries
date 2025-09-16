import React from 'react'

const primary = "bg-[#0A61C9] text-center p-2.5 rounded-3xl text-amber-50"
const secondary = "bg-[#BFB7B6] text-center text-[#737070] rounded-3xl p-2.5"

export default function Btn({content, onClick, type="button", className = primary}) {
    return (
        <div>
            <button type={type} onClick={onClick} className={className}>
                {content}
            </button>
        </div>
)}

export {secondary};
export {primary};