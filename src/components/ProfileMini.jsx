import React from 'react'
import { NavLink } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../utils/settings/config';

export default function ProfileMini(info) {

    let logOut =
        <li className="nav-item hidden lg:inline lg:pb-o pd-2 lg:mx-5">
            <NavLink
                to='/home' className='mr-2 text-red-500'
                onClick={() => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN);
                    window.location.reload()
                }}
            >Log out <i class="fa-solid fa-right-from-bracket text-red-500 "></i> </NavLink>
        </li>
    let logOutResponsive =
        <li className="nav-item block lg:hidden pb-2">
            <NavLink
                to='/home' className='mr-2 text-red-500 text-sm'
                onClick={() => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN);
                    window.location.reload()
                }}
            >Log out <i class="fa-solid fa-right-from-bracket text-red-500"></i> </NavLink>
        </li>

    let profileLink =
        <li className="nav-item block lg:inline ">
            <NavLink
                to='/profile'
                className=' mr-1 hidden lg:block'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 bg-slate-500 rounded-full' src='https://ecdn.game4v.com/g4v-content/uploads/2022/09/04222917/game4v-One-Piece-1662305355-71.png' />
                    <p className='ml-1 text-red-500'>{info.taiKhoan}</p>
                </div>
            </NavLink>
        </li>
    let adminLink =
        <li className="nav-item block lg:inline py-2 lg:mr-2">
            <NavLink to='/admin' className="text-left md:ml-1 uppercase text-red-500">Admin</NavLink>
        </li>


    return (
        <>{profileLink} {logOut} {adminLink} {logOutResponsive} </>
    )
}
