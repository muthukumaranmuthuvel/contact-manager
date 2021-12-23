import React from 'react'
import { useLocation, Link } from 'react-router-dom'
function ContactCard() {
    const location = useLocation()
    const { contacts } = location.state
    console.log(contacts)
    return (
        <div class="mx-5 min-h-screen grid place-content-center">
            <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
            <img class="rounded-full mx-auto shadow-lg object-fill" src="https://images.hdqwalls.com/download/spiderman-listening-music-dv-2932x2932.jpg" alt="User avatar"/>
            </div>
            <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                <h2 class="font-semibold text-2xl mb-6">{contacts.name}</h2>
                <p class="capitalize text-xl mt-1 ">{contacts.email}</p>
                <span class="flex items-center  w-24 pr-2 justify-center mx-auto mt-2 mb-12"></span>
                <Link to="/">
                <button class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Go to Contact add</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactCard
