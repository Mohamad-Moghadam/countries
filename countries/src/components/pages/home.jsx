import React from 'react'
import image from "../../assets/screen-0.webp"
import Btn from '../common/Btn'
import { secondary } from '../common/Btn'

export default function Home() {
    return (
        <div className='flex'>
            <section className='w-[40%]'>
                <h1>
                    Explore Countries with<span className='text-[#0A61C9] text-[30px]'>Real-Time Data</span>
                </h1>
                <section  className='flex'>
                    <Btn content="Explore Now"/>
                    <Btn content="Learn More" className={secondary}/>
                </section>
            </section>
            <section className='w-[40%]'>
                <img src={image} alt="photo of beautiful colorful houses on top of each other next to the shore, Amalfi, Italy" />
            </section>
        </div>
)}
