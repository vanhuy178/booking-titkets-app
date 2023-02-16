import React from 'react'
import { NavLink } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../utils/settings/config';

export default function ProfileMini(userName) {
    let logOut = <NavLink
        to='/home' className='mr-24'
        onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            window.location.reload()
        }}
    >Log out <i class="fa-solid fa-right-from-bracket"></i> </NavLink>

    let profileLink = <NavLink
        to='/profile'
        className='block mr-5'>
        <div className='flex items-center justify-center'>
            <div className='w-10 h-10 bg-slate-500 rounded-full'>
            </div><p className='ml-2 text-white'>{userName}</p></div></NavLink>

    return (
        <div className='flex items-center text-xl text-white'>{profileLink}{logOut}</div>
    )
}
