import { CloseOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchManagingBookingTickets, postBookingTickets } from '../redux/actions/managingBookingTickets';
import { ORDER_CINEMA_CHAIR } from '../redux/types/ManagingDetailShowtimeMovies';
import { BookingTicketClass } from '../models/BookingTicketsClass'
import _ from 'lodash'
import './StylePage/checkout.css';
import { fethInfoUser } from '../redux/actions/ManagingUserAction';
import moment from 'moment';
import { mainBackgroundColor } from '../assets/constant';


export default function Checkout(props) {
	const tabBooking = <span className='p-10 text-xl font-bold'>CHỌN VÀ THANH TOÁN</span>
	const tabResult = <span className='p-10 text-xl font-bold'>KẾT QUẢ ĐẶT VÉ</span>
	const { tabActive } = useSelector(state => state.managingBookingTicketsStore);
	const dispatch = useDispatch()

	return (
		//  	
		<div className={mainBackgroundColor}>
			<Tabs defaultActiveKey='1' activeKey={tabActive}
				onChange={(key) => {
					dispatch({ type: "CHANGE_TAB_ACTIVE", payload: key })
				}}
			>
				<Tabs.TabPane tab={tabBooking} key="1" >
					<CheckoutItem {...props} />
				</Tabs.TabPane>
				<Tabs.TabPane tab={tabResult} key="2">
					<ResultBookingTickes />
				</Tabs.TabPane>
			</Tabs>
		</div >
	)
}
function CheckoutItem(props) {
	const dispatch = useDispatch()
	//CALL API TO TAKE DATA 
	useEffect(() => {
		// DISPATH FUNCTION WITH THE HELP OF REDUX-THUNK
		dispatch(fetchManagingBookingTickets(props.match.params.id))
		dispatch(fethInfoUser())
	}, [])

	// GET VALUE FROM REDUCER ACTUALLY WE WAS LOGGED SUCCESSFULLY
	const { detailCinemaShowtimes, listOrderCinemaChairs, listChairIsOrderingByCustomer } = useSelector(state => state.managingBookingTicketsStore);
	const { managingInfoUser } = useSelector(state => state.managingUserStore);
	const { danhSachGhe, thongTinPhim } = detailCinemaShowtimes;

	// RENDER CHAIR
	const renderChair = () => {
		const vip = 'Vip';
		const vipClass = 'theVipChair';
		const theOrderChairClass = 'theOrderChair';
		console.log({ listChairIsOrderingByCustomer });

		return danhSachGhe.map((itemChair, index) => {
			console.log(itemChair.maGhe);
			let orderingChairClass = '';
			let orderedChairClass = '';
			let customersAreOrderingTheChairs = '';

			// CHECK WHAT EVERY SEATS IS BOOKED BY CUSTOMERS?
			let indexCustomerOrderClass = listChairIsOrderingByCustomer.findIndex(itemChairOrderByPeople => itemChairOrderByPeople.maGhe === itemChair.maGhe)
			if (indexCustomerOrderClass !== -1) {
				customersAreOrderingTheChairs = 'theChairAreOrderingByByCustomer'
			}
			// CHECK IF USER CLICK ON OR NOT 
			let indexOrderingChairs = listOrderCinemaChairs.findIndex(orderingChair => orderingChair.maGhe === itemChair.maGhe);
			// IF CLICK IT AND THEY EQUALS ID, THE BUTTON WILL TRANSFORM GREEN
			if (indexOrderingChairs !== -1) {
				orderingChairClass = 'theOrderingChair'
			}

			if (managingInfoUser.taiKhoan === itemChair.taiKhoanNguoiDat) {
				orderedChairClass = 'theYourOrderChair'
			}
			let typeOfChairs = itemChair.loaiGhe.trim().toLocaleLowerCase() === vip.toLocaleLowerCase() ? vipClass : '';
			let checkOrder = itemChair.daDat === true ? theOrderChairClass : '';
			return <>
				<button
					disabled={itemChair.daDat | customersAreOrderingTheChairs !== ''}
					className={` theChair ${typeOfChairs} ${checkOrder} ${orderingChairClass} ${orderedChairClass} ${customersAreOrderingTheChairs} text-center text-gray-800`}
					key={index}

					// HANDLE EVENT
					onClick={() => {
						dispatch({
							type: ORDER_CINEMA_CHAIR,
							payload: itemChair
						})
					}}
				>
					{/* IF I ORDER THE ICON IS USER ICON, BUT PEOPLE ORDER IS X */}
					{itemChair.daDat ? orderedChairClass !== '' || customersAreOrderingTheChairs !== '' ?
						<UserOutlined /> : <CloseOutlined /> :
						customersAreOrderingTheChairs !== '' ? <UsergroupAddOutlined /> : itemChair.stt}
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
		<div className="min-h-screen checkout-c">
			<div className='grid grid-cols-12'>

				{/* SHOW SCREEN */}
				<div className="col-span-8">
					{/* SCREEN */}
					<div className="bg-black w-full h-5 rounded-sm text-white text-center" style={{ width: '75%', margin: '0 auto' }}>Màn hình</div>
					<div className={'trapezoid'} style={{ textAlign: 'center' }}>
					</div>

					{/* THE LIST CINEMA CHAIRS */}
					<div className='mt-10 mx-auto' style={{ width: '75%' }}>
						{renderChair()}
					</div>

					{/* DESCIPTION */}
					<div className="flex justify-center" style={{ width: '70%', margin: '0 auto' }}>
						<div className='w-full'>
							<ul className='flex justify-between'>
								<li>Ghế đang đặt <button className='theChair theOrderingChair'>00</button></li>
								<li>Ghế đã được đặt <button className='theChair theOrderChair'>X</button></li>
								<li>Ghế chưa đặt <button className='theChair'>00</button></li>
								<li>Ghế vip <button className='theChair theVipChair'>00</button></li>
								<li>Ghế mình đặt <button className='theChair theYourOrderChair'><UserOutlined /></button></li>
								<li>Ghế người khác đang đặt<button className='theChair theChairIsOrderByAnother'>00</button></li>
							</ul>
						</div>
					</div>
				</div>

				{/* SHOW DETAIL OF THE MOVIE */}
				<div className="col-span-3">
					{/* TỔNG TIỀN */}
					<h2 className='text-center text-4xl text-green-600 font-bold my-5'>{totalMoney()} đ</h2>
					<hr />
					<div className="detail-film">
						<h2 className='text-xl'>{thongTinPhim.tenPhim}</h2>
						<p>{thongTinPhim.tenCumRap}</p>
						<p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
					</div>
					<hr />

					<div className="my-2">
						<p className='text-red-500 ' style={{ minHeight: '50px' }}>
							<span className='w-24 inline-block'>
								Số ghế:
							</span>

							<span className='break-words'>
								{
									_.sortBy(listOrderCinemaChairs, ['stt']).map((itemOrderCinemaChair, indexOrderingChairs) => {
										return <span
											key={indexOrderingChairs}
											className='text-green-500 text-xl mx-1'
										>{itemOrderCinemaChair.stt}</span>
									})
								}
							</span>
						</p>
						<p className='text-green-500'>Tổng tiền:
							<span className='ml-2'>
								{totalMoney()}
							</span>
						</p>
					</div>

					<hr />
					<p>Email</p>
					<p>{managingInfoUser.taiKhoan}</p>

					<hr />
					<p>Phone</p>
					<p>{managingInfoUser.soDT}</p>

					<hr />
					<p>Mã thanh toán</p>
					<p className='text-sm text-gray-400'>Áp dụng mã giảm giá</p>

					<hr />
					{/* BUTTON BOOKING */}
					<div className='flex flex-col mt-10 justify-start'
						onClick={() => {
							const infoBooking = new BookingTicketClass()
							infoBooking.maLichChieu = props.match.params.id;
							infoBooking.danhSachVe = []
							listOrderCinemaChairs.map((itemOrderCinemaChairs, index) => {
								const { maGhe, giaVe } = itemOrderCinemaChairs;
								if (maGhe !== '' && giaVe !== '') {
									infoBooking.danhSachVe.push({ maGhe, giaVe })
								}
							})
							return dispatch(postBookingTickets(infoBooking))
						}}
					>
						{/* CODING.......................................................................... */}
						<button className="w-full bg-green-600 text-white py-2 px-4 border border-gray-400 rounded shadow uppercase">
							Đặt vé
						</button>
					</div>
				</div>


			</div>
		</div >
	)
}



function ResultBookingTickes() {
	// WHEN WEB LOADING THERE ARE NO INFO ABOUT MANAGINGINFOUSER BECAUSE WE TAKE IT FROM REDUCER
	// SO NOW WE WILL CALL API TAKE IT
	const dispatch = useDispatch();
	const { managingInfoUser } = useSelector(state => state.managingUserStore);

	useEffect(() => {
		dispatch(fethInfoUser());
	}, [])

	const renderInfoBookingTickets = () => {
		return managingInfoUser.thongTinDatVe && managingInfoUser.thongTinDatVe.map((itemInfoTickets, indexInfoTickets) => {
			const seats = _.first(itemInfoTickets.danhSachGhe);
			const { ngayDat, tenPhim } = itemInfoTickets
			return (
				<div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={indexInfoTickets}>
					<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
						<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={itemInfoTickets.hinhAnh} />
						<div className="flex-grow">
							<h2 className="text-gray-900 title-font font-medium">{tenPhim}</h2>
							<p className="text-gray-500">{moment(ngayDat).format('hh:mm A d/mm/yy')}</p>
							<p>Địa điểm: <h1>{seats.tenHeThongRap}-{seats.tenCumRap}</h1></p>
							<p>Số ghế</p>
							<p>{itemInfoTickets.danhSachGhe.slice(0, 10).map(item => <span className='ml-1 text-sm break-words text-green-500'>{item.tenGhe}</span>)}</p>
						</div>
					</div>
				</div>
			)
		})
	}
	return <div className='result-booking-tickets container'>
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-10 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-purple-500">Lịch sử đặt vé khách hàng</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thông tin thời gian và địa điểm</p>
				</div>
				<div className="flex flex-wrap -m-2">
					{/* RENDER INFO BOOKING TICKETS */}
					{renderInfoBookingTickets()}
				</div>
			</div>
		</section>

	</div>
}