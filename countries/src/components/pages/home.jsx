import React from 'react'
import image from "../../assets/screen-0.webp"
import Btn from '../common/Btn'
import { secondary } from '../common/Btn'
import { primary } from '../common/Btn'
import { Link } from 'react-router'

export default function Home() {
    return (
        <div className='flex justify-center items-center mt-48'>
            <section className='w-[40%]'>
                <h1>
                    Explore Countries with<span className='text-[#0A61C9] text-[30px]'>Real-Time Data</span>
                </h1>
                <p>
                    Discover details about every country around the world – from capitals to regions!
                </p>
                <section  className='flex gap-3.5'>
                    <Link to="/countries">
                        <Btn content="Explore Now" className={primary}/>
                    </Link>
                    <Link to="/about">
                    <Btn content="Learn More" className={secondary}/>
                    </Link>
                </section>
            </section>
            <section className='w-[40%]'>
                <img src={image} alt="photo of beautiful colorful houses on top of each other next to the shore, Amalfi, Italy" />
            </section>
        </div>
)}
