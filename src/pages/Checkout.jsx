import { CloseOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchManagingBookingTickets } from '../redux/actions/managingBookingTickets';
import { ORDER_CINEMA_CHAIR } from '../redux/types/ManagingDetailShowtimeMovies';
import _ from 'lodash'
import './StylePage/checkout.css';


export default function Checkout(props) {
    const dispatch = useDispatch()
    //CALL API TO TAKE DATA 
    useEffect(() => {
        // DISPATH FUNCTION WITH THE HELP OF REDUX-THUNK
        dispatch(fetchManagingBookingTickets(props.match.params.id))
    }, [])

    // GET VALUE FROM REDUCER ACTUALLY WE WAS LOGGED SUCCESSFULLY
    const { detailCinemaShowtimes, listOrderCinemaChairs } = useSelector(state => state.managingBookingTicketsStore);
    const { userLogin } = useSelector(state => state.managingUserStore);
    const { danhSachGhe, thongTinPhim } = detailCinemaShowtimes;

    // RENDER CHAIR
    const renderChair = () => {
        const vip = 'Vip';
        const vipClass = 'theVipChair';
        const theOrderChairClass = 'theOrderChair'
        return danhSachGhe.map((item, index) => {

            let indexOrderingChairs = listOrderCinemaChairs.findIndex(orderingChair => orderingChair.maGhe === item.maGhe);
            let orderingChairClass = '';
            if (indexOrderingChairs !== -1) {
                orderingChairClass = 'theOrderingChair'
            }
            let typeOfChairs = item.loaiGhe.trim().toLocaleLowerCase() === vip.toLocaleLowerCase() ? vipClass : '';
            let checkOrder = item.daDat === true ? theOrderChairClass : '';
            return <>

                <button
                    disabled={item.daDat}
                    className={` theChair ${typeOfChairs} ${checkOrder} ${orderingChairClass} text-center text-gray-800`}
                    key={index}

                    // HANDLE EVENT
                    onClick={() => {
                        dispatch({
                            type: ORDER_CINEMA_CHAIR,
                            payload: item
                        })
                    }}

                >
                    {item.daDat ? <CloseOutlined /> : item.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </>
        }
        )
    }
    const totalMoney = () => {

        return (listOrderCinemaChairs.length !== 0 ? listOrderCinemaChairs.reduce((total, item) => total += item.giaVe, 0) : 0).toLocaleString()

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
                    <h2 className='text-center text-4xl text-green-600 font-bold my-5'>{totalMoney()} đ</h2>
                    <hr />
                    <div className="detail-film">
                        <h2 className='text-xl'>{thongTinPhim.tenPhim}</h2>
                        <p>{thongTinPhim.tenCumRap}</p>
                        <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
                    </div>
                    <hr />

                    <div className="my-2">
                        <p className='text-red-500' style={{ minHeight: '50px' }}>
                            <span>
                                Số ghế:
                            </span>
                            {
                                _.sortBy(listOrderCinemaChairs, ['stt']).map((itemOrderCinemaChair, indexOrderingChairs) => {
                                    return <span
                                        key={indexOrderingChairs}
                                        className='text-green-500 text-xl mx-1'
                                    >{itemOrderCinemaChair.stt}</span>
                                })
                            }
                        </p>
                        <p className='text-green-500'>Tổng tiền:
                            <span className='ml-2'>

                                {totalMoney()}
                            </span>
                        </p>
                    </div>

                    <hr />
                    <p>Email</p>
                    <p>{userLogin.taiKhoan}</p>

                    <hr />
                    <p>Phone</p>
                    <p>{userLogin.soDT}</p>

                    <hr />
                    <p>Mã thanh toán</p>
                    <p className='text-sm text-gray-400'>Áp dụng mã giảm giá</p>

                    <hr />
                    <div className='flex flex-col mt-10 justify-start '>
                        <button className="w-full bg-green-600 text-white py-2 px-4 border border-gray-400 rounded shadow uppercase">
                            Đặt vé
                        </button>
                    </div>
                </div>


            </div>
        </div >
    )
}
