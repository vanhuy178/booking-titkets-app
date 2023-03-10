import React, { useEffect } from 'react'

export default function Profile() {
    useEffect(() => {
        document.title = 'Profiles - Cenima App';
    }, [])
    let userInfo = '';
    if (localStorage.getItem('USER_LOGIN')) {
        userInfo = JSON.parse(localStorage.getItem('USER_LOGIN'))
    }
    const { maNhom, taiKhoan, soDT, hoTen, maLoaiNguoiDung } = userInfo;

    return (
        <div classname="profile">
            <div className="p-16"><div className="p-8 mt-32 bg-white shadow ">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="title-mini">22</p>
                            <p className="text-gray-400">Friends</p>
                        </div>
                        <div>
                            <p className="title-mini">10</p>
                            <p className="text-gray-400">Photos</p>
                        </div>
                        <div>
                            <p className="title-mini">89</p>
                            <p className="text-gray-400">Comments</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex-center-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button className="btn-profile bg-blue-400 hover:bg-blue-500"
                        >Connect
                        </button>
                        <button className="btn-profile bg-gray-700 hover:bg-gray-800"
                        > Message</button>
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{hoTen}</h1>
                    <p className="mt-8 text-gray-500">UserName: {taiKhoan}-{maNhom}-{Math.floor(Math.random() * 1000) + 1}</p>
                    <p className="mt-2 text-gray-500">
                        S??? ??i???n tho???i: {soDT}
                    </p>
                    <p className="mt-2 text-gray-500">
                        Loai nguoi dung: {(maLoaiNguoiDung)}
                    </p>
                </div>
            </div>
            </div>
        </div>

    )
}
