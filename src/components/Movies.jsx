import React from 'react'

export default function Movies(props) {
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, moTa, maPhim, ngayKhoiChieu, sapChieu, tenPhim, trailer } = props.moviesItem;
    return (
        <div className="p-2 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={hinhAnh} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl h-20 font-semibold dark:text-violet-400">{tenPhim}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-400 text-sm mb-10">{moTa.length > 100 ? <p>{moTa.slice(0, 100)}...</p> : moTa}</p>
                </div>

                <div className="space-y-2 text-center">
                    <div className="my-5">
                        <a className='h-20 w-20 rounded-sm bg-slate-600 px-7 py-2 text-white uppercase '>Đặt vé</a>

                    </div>
                </div>
            </div>
        </div >
    )
}
