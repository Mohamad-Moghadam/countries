import React from 'react'
import image from "../../assets/screen-0.webp"
import Btn from '../common/Btn'
import { secondary } from '../common/Btn'
import { primary } from '../common/Btn'
import { Link } from 'react-router'

export default function Home() {
    return (
        <div className='min-h-screen w-full bg-white flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-20 px-6 md:px-16 lg:px-24 py-12 md:py-20'>
            <section className='w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl font-extrabold leading-tight text-gray-900'>
                    Explore Countries with <span className='text-[#0A61C9] text-3xl md:text-5xl font-extrabold tracking-tight'>Real-Time Data</span>
                </h1>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                    Discover details about every country around the world – from capitals to regions!
                </p>
                <section  className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4'>
                    <Link to="/countries">
                        <Btn content="Explore Now" className={primary}/>
                    </Link>
                    <Link to="/about">
                    <Btn content="Learn More" className={secondary}/>
                    </Link>
                </section>
            </section>
            <section className='w-full md:w-1/2 flex justify-center'>
                <img src={image} alt="photo of beautiful colorful houses on top of each other next to the shore, Amalfi, Italy" className='rounded-2xl shadow-xl max-w-full h-auto'/>
            </section>
        </div>
)}
