import React from 'react'
import { NavLink } from 'react-router-dom';
import { Select } from 'antd';
import MainLogo from '../../../../components/MainLogo';
import { useTranslation } from 'react-i18next';
import { BarsOutlined } from '@ant-design/icons';
import ProfileMini from '../../../../components/ProfileMini';

const { Option } = Select;
export default function Header() {
	// const userLogin = 
	let titleNav = `text-xl xl:text-2xl main-text-color font-bold hover:text-white`;
	let hover = 'font-bold hover:text-white block lg:inline py-1 lg:py-0 hover:no-underline'
	let infoUserName = "";

	// take from localstorage
	if (localStorage.getItem('USER_LOGIN')) {
		infoUserName = JSON.parse(localStorage.getItem('USER_LOGIN'))
	}
	const { t, i18n } = useTranslation();
	const handleChange = (value) => {
		i18n.changeLanguage(value)
	}

	const renderLogin = () => {
		if (infoUserName === "" || infoUserName.taiKhoan === "") {
			return (
				<>
					{/* LOGIN AND RESGISTER */}
					<NavLink to='/login' className={`main-text-color hvr-float ${hover}`} i18nKey={'login'}>{t('login')}</NavLink>
					<NavLink to='/register' className={`main-text-color md:mx-3 xl:mx-4 hvr-float ${hover}`} i18nKey={'register'}>{t('register')}</NavLink>
					<NavLink to='/admin' className={`main-text-color mr-2 xl:mr-3  hvr-float ${hover} hidden lg:block`}>Admin</NavLink>
				</>
			)
		}
		else {
			return <>
				{ProfileMini(infoUserName)}
			</>
		}
	}
	return (
		// WE ARE USING MAMBA LIB IT IS A LIB SUPPORT FOR TAILWIND WITH CLASS NAME THE SAME TAILWIND
		<header className={`px-4 bg-opacity-75 dark:bg-gray-800 dark:text-gray-100 bg-gray-700 w-full fixed z-10 animate__animated animate__bounceInDown`}>
			<nav className="navbar navbar-expand-lg py-0" >
				<div className="container lg:flex lg:items-center">
					<div className="hidden lg:block md:-ml-10">
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
							<li className="nav-item active lg:ml-2 lg:mt-0 hvr-bounce-to-bottom">
								<NavLink to="/home" className={`nav-link lg:${titleNav} py-5`} i18nKey={'home'}>{t('home')}</NavLink>
							</li>
							<li className="nav-item lg:mx-10 hvr-bounce-to-bottom ">
								<NavLink to="/contact" className={`nav-link lg:${titleNav}  py-5`} i18nKey={'contact'}>{t('contact')}</NavLink>
							</li>
							<li className="nav-item lg:mr-52 nav-item-center hvr-bounce-to-bottom ">
								<NavLink to="/news" className={`nav-link lg:${titleNav}  py-5`} i18nKey={'news'}>{t('news')}</NavLink>
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
