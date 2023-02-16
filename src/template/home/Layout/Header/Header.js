import React from 'react'
import { NavLink } from 'react-router-dom';
import { Select } from 'antd';
import MainLogo from '../../../../components/MainLogo';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ProfileMini from '../../../../components/ProfileMini'
import _ from 'lodash';
const { Option, OptGroup } = Select;

export default function Header() {
    const { userLogin } = useSelector(state => state.managingUserStore)
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }
    console.log(userLogin);
    const renderLogin = () => {
        if (userLogin.taiKhoan === "") {
            return (
                <>
                    {/* LOGIN AND RESGISTER */}
                    <NavLink to='/login' className="self-center px-8 py-3 rounded" i18nKey={'login'}>{t('login')}</NavLink>
                    <NavLink to='/register' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" i18nKey={'register'}>{t('register')}</NavLink>
                </>
            )
        }
        else {
            return <>
                {ProfileMini(userLogin.taiKhoan)}
            </>
        }
    }
    return (
        // WE ARE USING MAMBA LIB IT IS A LIB SUPPORT FOR TAILWIND WITH CLASS NAME THE SAME TAILWIND
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white w-full fixed z-10">
            <div className="container flex justify-between h-16 mx-auto">

                {/* LOGO AND STYLE */}
                <MainLogo />

                {/* NAVBAR ITEM */}
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent  text-white" activeClassName="border-b-2 border-white" i18nKey={'home'}>{t('home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white" i18nKey={'contact'}>{t('contact')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white" i18nKey={'news'}>{t('news')}</NavLink>
                    </li>

                </ul>

                {/* LOGIN AND RESGISTER */}
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {/* {renderLogin()} */}
                    <Select className='ml-2' defaultValue="en" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="vi">Vi</Option>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>
                    </Select>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header >
    )
}
