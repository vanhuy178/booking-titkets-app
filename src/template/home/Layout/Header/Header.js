import React from 'react'
import { NavLink } from 'react-router-dom';
import { animation, styleImageLogo } from '../../../../assets/constant';
import prepersentLogo from '../../../../assets/image/PrepesentImage.png';


export default function Header() {
    return (


        // WE ARE USING MAMBA LIB IT IS A LIB SUPPORT FOR TAILWIND WITH CLASS NAME THE SAME TAILWIND
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white w-full fixed z-10">
            <div className="container flex justify-between h-16 mx-auto">

                {/* LOGO AND STYLE */}
                <style>
                    {animation}
                </style>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={prepersentLogo} alt="Logo" style={styleImageLogo} />
                </a>

                {/* NAVBAR ITEM */}
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white" activeClassName="border-b-2 border-white">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white" >Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">News</NavLink>
                    </li>

                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
