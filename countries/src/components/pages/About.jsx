import React from 'react'

export default function About() {
    return (
        <div className="mt-24 mx-auto max-w-4xl bg-white rounded-3xl shadow-md p-8 md:p-12 text-gray-900">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                About This Website
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                This website uses the <span className="font-semibold text-blue-500">REST Countries API</span> 
                to display comprehensive information about countries from around the world.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                Explore our data to learn about country names, capitals, regions, populations, flags, and much more. 
                Whether you’re curious about a particular country or looking for insights about global regions, 
                our interactive explorer makes it easy.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                Our goal is to build a fully responsive and modern web application using the latest technologies, 
                including <span className="font-semibold text-blue-500">React Router v7</span> for seamless routing 
                and <span className="font-semibold text-blue-500">Tailwind CSS</span> for a beautiful, responsive user interface.
            </p>
        </div>
)}
