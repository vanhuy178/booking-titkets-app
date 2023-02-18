import React from 'react'
import { NavLink } from 'react-router-dom';
import { Select } from 'antd';
import MainLogo from '../../../../components/MainLogo';
import { useTranslation } from 'react-i18next';
import { BarsOutlined } from '@ant-design/icons'
import ProfileMini from '../../../../components/ProfileMini'
import _ from 'lodash';
import './style.scss';
import { mainTextTitle } from '../../../../assets/constant';
const { Option } = Select;
export default function Header() {


    // take from localstorage
    let infoUserName = null;
    if (localStorage.getItem('USER_LOGIN')) {
        infoUserName = JSON.parse(localStorage.getItem('USER_LOGIN'))
    }
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }
    console.log(typeof userLogin);


    const renderLogin = () => {
        if (infoUserName === null || infoUserName.taiKhoan === "") {
            return (
                <>
                    {/* LOGIN AND RESGISTER */}
                    <NavLink to='/login' className="self-center rounded" i18nKey={'login'}>{t('login')}</NavLink>
                    <NavLink to='/register' className="self-center font-semibold rounded dark:bg-violet-400 dark:text-gray-900" i18nKey={'register'}>{t('register')}</NavLink>
                    <NavLink to='/admin' className="self-center rounded">Admin</NavLink>
                </>
            )
        }
        else {
            return <>
                {ProfileMini(infoUserName)}
            </>
        }
    }

    let titleNav = `text-2xl ${mainTextTitle} font-bold hover:text-yellow-400`
    return (
        // WE ARE USING MAMBA LIB IT IS A LIB SUPPORT FOR TAILWIND WITH CLASS NAME THE SAME TAILWIND
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-gray-700 bg-opacity-40 text-white w-full fixed z-10">
            <nav className="navbar navbar-expand-lg " >
                <div className="container lg:flex lg:items-center">
                    <div className="hidden lg:block">
                        <MainLogo />
                    </div>
                    {/* RESPONSIVE */}
                    <div className="block lg:hidden">
                        <NavLink
                            to='/profile'
                            className='block mr-1'>
                            <div className='flex  items-center'>
                                <img className='w-10 h-10 bg-slate-500 rounded-full' src='https://ecdn.game4v.com/g4v-content/uploads/2022/09/04222917/game4v-One-Piece-1662305355-71.png' />
                                <p className='ml-1 text-yellow-500'>{infoUserName.taiKhoan}</p>
                            </div>
                        </NavLink>
                    </div>

                    {/* ICON RESPONSIVE */}
                    <button className="navbar-toggler bg-yellow-200" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <BarsOutlined className='navbar-toggler-icon' />
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto lg:flex lg:items-center">
                            <li className="nav-item active">
                                <NavLink to="/home" className={`nav-link ${titleNav}`} i18nKey={'home'}>{t('home')}</NavLink>
                            </li>
                            <li className="nav-item lg:mx-10">
                                <NavLink to="/contact" className={`nav-link ${titleNav}`} i18nKey={'contact'}>{t('contact')}</NavLink>
                            </li>
                            <li className="nav-item lg:mr-52">
                                <NavLink to="/news" className={`nav-link ${titleNav}`} i18nKey={'news'}>{t('news')}</NavLink>
                            </li>
                            <li className="nav-item ml-0 lg:ml-80 lg:flex lg:items-center">
                                {renderLogin()}
                            </li>
                            <Select className='ml-0 lg:ml-2 lg:pd-0 lg:-mr-20' defaultValue="en" style={{ width: 70 }} onChange={handleChange}>
                                <Option value="vi">Vi</Option>
                                <Option value="en">Eng</Option>
                                <Option value="chi">Chi</Option>
                            </Select>
                        </ul>
                    </div>
                </div>
            </ nav>

        </header >
    )
}
