import React from 'react'

const primary = "bg-[#0A61C9] text-center p-[10px] rounded-3xl text-amber-50"
const secondary = "bg-[#BFB7B6] text-center text-[#737070] rounded-3xl p-[10px]"

export default function Btn({content, onClick, type, className={primary}}) {
    return (
        <div>
            <button type={type} onClick={onClick} className={className}>
                {content}
            </button>
        </div>
)}

export {secondary};