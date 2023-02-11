import React from 'react'
import { NavLink } from 'react-router-dom'
import { animation, styleImageLogo } from '../assets/constant'
import representLogo from '../assets/image/PrepesentImage.png'
export default function MainLogo() {
    return (
        <>
            <NavLink rel="noopener noreferrer" to='./home' aria-label="Back to homepage" className="flex items-center p-2 inline-block">
                <style>
                    {animation}
                </style>
                <img src={representLogo} alt="Logo" style={styleImageLogo} />
            </NavLink>
        </>
    )
}
