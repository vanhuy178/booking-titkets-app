import React from 'react'
import { NavLink } from 'react-router-dom'
import representLogo from '../assets/image/PrepesentImage.png'
const styleImageLogo = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    animation: 'spin 10s linear infinite',
    animationDelay: 'calc(var(--delay) * -1s)'
}
const animation = `
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`
export default function MainLogo() {
    return (
        <>
            <NavLink rel="noopener noreferrer" to='/home' aria-label="Back to homepage" className="flex items-center p-2  hvr-grow">
                <style>
                    {animation}
                </style>
                <img src={representLogo} alt="Logo" style={styleImageLogo} />
            </NavLink>
        </>
    )
}
