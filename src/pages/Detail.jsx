import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/styles/ratingCircle.scss';
import { fetchDetailShowTimesMovies } from '../redux/actions/ManagingMovies';
import moment from 'moment';
import { Rate, Table } from 'antd';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { NavLink } from 'react-router-dom';

export default function Detail(props) {
	let dispatch = useDispatch()

	useEffect(() => {


		// TAKE INFO PARAMS FROM URL
		let { id } = props.match.params

		// WE WILL CALL API BY DISPATCH WITH FUNTION PASS BY ID
		dispatch(fetchDetailShowTimesMovies(id))
	}, [])


	// CONNECT TO STATE REDUX AND BUILD FUNCTION FOR CALL API IN SERVICES FOLDER
	const { detailMoviesShowTimesInfo } = useSelector(state => state.managingMoviesStore);
	// OH NO *.* YOU NEED MAINTAIN CODE PLEASE! 
	const description = detailMoviesShowTimesInfo.moTa;
	const rating = detailMoviesShowTimesInfo.danhGia;
	const image = detailMoviesShowTimesInfo.hinhAnh


	return (
		<>
			<div style={{ backgroundImage: `url(${detailMoviesShowTimesInfo.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
				<CustomCard
					style={{ paddingTop: '150px', minHeight: '100vh' }}
					effectColor="#C780FF" // required
					color="#14AEFF" // default color is white
					blur={5} // default blur value is 10px
					borderRadius={0} // default border radius value is 10px
				>
					<div className="grid grid-cols-12">
						<div className="col-span-5 col-start-2 flex items-center">
							<img src={image} alt={detailMoviesShowTimesInfo.tenPhim} style={{ width: '200px', height: '300px' }} />
							<div className='ml-5 text-gray-100'>
								<p>Ngày chiếu: {moment(detailMoviesShowTimesInfo.ngayKhoiChieu).format('d.mm.yyyy')}</p>
								<p className='text-2xl'>{detailMoviesShowTimesInfo.tenPhim}</p>
								<p className='text-sm'>{description && description.length > 100 ? <span>{description.substr(0, 100)}...</span> : <span>{description}</span>}</p>
							</div>
						</div>
						{/*RATING CIRCLE */}
						<div className="col-span-6 mt-12 mx-auto">
							{/* CODING... RATING CIRCLE */}

							<div class="clearfix">

								<div class={`c100 p${rating * 10} big green`}>
									<span>{(rating * 10)}%</span>
									<div class="slice">
										<div class="bar"></div>
										<div class="fill"></div>
									</div>
								</div>
							</div>

							{/* TEXT RATING */}
							<div className="text-center">
								<p className='uppercase text-xl text-white'>Đánh giá </p>
								<Rate allowHalf value={rating / 2} className='text-green-500' />
							</div>
						</div>
					</div>

					<div className='bg-white py-10 px-12 mt-20 ml-64 w-2/3 ' style={{ minHeight: 500 }}>
						<Tabs defaultActiveKey="1" size={'small'} centered >
							<TabPane tab={
								<h1 className='text-xl'>Lịch chiếu</h1>
							} key="1" >
								<div className="">
									<Tabs tabPosition={'left'} >
										{
											detailMoviesShowTimesInfo.heThongRapChieu && detailMoviesShowTimesInfo.heThongRapChieu.map((itemCinema, index) => {
												return (<TabPane tab={
													<div>
														<img src={itemCinema.logo} alt={itemCinema.tenPhim} className='rounded-full' width={50} />
														{itemCinema.tenHeThongRap}
													</div>
												}
													key={index}>

													{/* LOADING CINEMA SYSTEM */}

													{
														itemCinema.cumRapChieu && itemCinema.cumRapChieu.map((itemGroupCinema, indexGroupCinema) => {
															return (
																<div className=' mb-5' key={indexGroupCinema}>
																	<div className="flex">
																		<img src={itemGroupCinema.hinhAnh} alt={itemGroupCinema.tenCumRap} style={{ width: '50px', height: '50px' }} />
																		<div className='ml-5'>
																			<p className='text-xl leading-3 font-bold'>{itemGroupCinema.tenCumRap}</p>
																			<p className='text-sm mt-3 text-gray-500'>{itemGroupCinema.diaChi}</p>
																		</div>
																	</div>
																	<div className="info-showtimes-movie mt-2 grid grid-cols-4 gap-5">
																		{itemGroupCinema.lichChieuPhim && itemGroupCinema.lichChieuPhim.map((itemInforShowtimesMovie, indexShowtimesMovies) => {

																			return (
																				<NavLink to={`/checkout/${itemInforShowtimesMovie.maLichChieu}`} className='text-sm col-span-1 text-green-500' key={indexShowtimesMovies}>
																					<p>
																						{itemInforShowtimesMovie.tenRap}
																					</p>
																					<p>
																						Giá vé: {itemInforShowtimesMovie.giaVe}
																					</p>
																					<p>
																						Thời lượng: {itemInforShowtimesMovie.thoiLuong}'
																					</p>
																					<p>
																						{moment(itemInforShowtimesMovie.ngayChieuGioChieu).format('d.mm.yyyy')}
																					</p>
																					<p>
																						{moment(itemInforShowtimesMovie.ngayChieuGioChieu).format('hh:mm A')}
																					</p>
																				</NavLink>
																			)
																		})}
																	</div>

																</div>
															)
														})
													}
												</TabPane>)
											})
										}
									</Tabs>
								</div>
							</TabPane>
							<TabPane tab={
								<h1 className='text-xl mx-5'>Thông tin</h1>
							} key="2" >

							</TabPane>
							<TabPane tab={
								<h1 className='text-xl'>Đánh giá</h1>
							} key="3">

							</TabPane>
						</Tabs>
					</div>

					{/*WHICH CINEMA will WILL THIS MOVIE BE SHOWN*/}


				</CustomCard>
			</div>
		</>
	)
}



