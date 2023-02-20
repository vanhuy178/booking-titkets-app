import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonBack(props) {
    return (
        <div className='fixed top-5 left-5'>
            <NavLink to={props.address}>
                <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="19" y1="12" x2="5" y2="12" />  <polyline points="12 19 5 12 12 5" /></svg>
            </NavLink>
        </div>
    )
}
