import { CloseOutlined } from '@ant-design/icons';
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchManagingBookingTickets } from '../redux/actions/managingBookingTickets';
// import styleCheck from './StylePage/checkout.module.css';
import './StylePage/checkout.css';

export default function Checkout(props) {
    const dispatch = useDispatch()
    //CALL API TO TAKE DATA 
    useEffect(() => {
        // DISPATH FUNCTION WITH THE HELP OF REDUX-THUNK
        dispatch(fetchManagingBookingTickets(props.match.params.id))
    }, [])

    // GET VALUE FROM REDUCER ACTUALLY WE WAS LOGGED SUCCESSFULLY
    const { detailCinemaShowtimes } = useSelector(state => state.managingBookingTicketsStore);
    const { userLogin } = useSelector(state => state.managingUserStore);

    const { danhSachGhe, thongTinPhim } = detailCinemaShowtimes;
    console.log(danhSachGhe);
    console.log(userLogin);

    // RENDER CHAIR
    const renderChair = () => {
        const vip = 'Vip';
        const vipClass = 'theVipChair';
        return danhSachGhe.map((item, index) => {
            let typeOfChairs = item.loaiGhe.trim().toLocaleLowerCase() === vip.toLocaleLowerCase() ? vipClass : '';
            let checkOrder = item.daDat === true ? 'theOrderChair' : '';
            return <>

                <button disabled={item.daDat} className={` theChair ${typeOfChairs} ${checkOrder} text-center text-gray-800`} key={index}>
                    {item.daDat ? <CloseOutlined /> : item.stt}
                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </>
        }
        )
    }

    return (
        <div className="min-h-screen">
            <div className='grid grid-cols-12'>

                {/* SHOW SCREEN */}
                <div className="col-span-8">
                    {/* SCREEN */}
                    <div className="bg-black w-full h-5 rounded-sm" style={{ width: '75%', margin: '0 auto' }}></div>
                    <div className={'trapezoid'} style={{ textAlign: 'center' }}>
                        <p className='text-gray-800 pt-2'>Màn hình</p>
                    </div>

                    {/* THE LIST CINEMA CHAIRS */}

                    <div className='mt-20 mx-auto' style={{ width: '75%' }}>
                        {renderChair()}
                    </div>
                </div>

                {/* SHOW DETAIL OF THE MOVIE */}
                <div className="col-span-3">
                    <h2 className='text-center text-4xl text-green-600 font-bold my-5'>0 đ</h2>
                    <hr />
                    <div className="detail-film">
                        <h2 className='text-xl'>{thongTinPhim.tenPhim}</h2>
                        <p>{thongTinPhim.tenCumRap}</p>
                        <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
                    </div>
                    <hr />

                    <div className="flex">
                        <p className='text-red-500 w-3/4'>Ghế</p>
                        <p className='text-green-500 text-right'>0 đ</p>
                    </div>

                    {/* WE DON'T NEED RENDER IT AGAIN */}
                    <hr />
                    <p>Email</p>
                    <p>{userLogin.taiKhoan}</p>

                    <hr />
                    <p>Phone</p>
                    <p>{userLogin.soDT}</p>
                    {/* --------------------------------- */}


                    <hr />
                    <p>Mã thanh toán</p>
                    <p className='text-sm text-gray-400'>Áp dụng mã giảm giá</p>

                    <hr />
                    <div className='flex flex-col items-center justify-center h-full'>
                        <button className="w-full bg-green-600 text-white py-2 px-4 border border-gray-400 rounded shadow uppercase">
                            Đặt vé
                        </button>
                    </div>
                </div>


            </div>
        </div >
    )
}
