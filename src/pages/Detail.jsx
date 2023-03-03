import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailShowTimesMovies } from '../redux/actions/ManagingMovies';
import moment from 'moment';
import { Rate } from 'antd';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { NavLink } from 'react-router-dom';
export default function Detail(props) {
	let dispatch = useDispatch()

	useEffect(() => {
		document.title = 'Details - Cenima App';

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
			<div className='detail-c ' style={{ backgroundImage: `url(${detailMoviesShowTimesInfo.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
				<CustomCard
					style={{ paddingTop: '150px', minHeight: '100vh' }}
					effectColor="#C780FF" // required
					color="#14AEFF" // default color is white
					blur={5} // default blur value is 10px
					borderRadius={0} // default border radius value is 10px
				>
					<div className="grid grid-cols-12">
						<div className="col-span-5 col-start-2 flex items-center movies-logo__response">
							<img src={image} alt={detailMoviesShowTimesInfo.tenPhim} style={{ width: '200px', height: '300px' }} className='animate__animated animate__pulse animate__slower animate__infinite infinite main-title__image' />
							<div className='ml-5 text-gray-700 bg-slate-100 p-1 rounded-sm detail_showtimes'>
								<p className='text-2xl'>Ngày chiếu: {moment(detailMoviesShowTimesInfo.ngayKhoiChieu).format('d.mm.yyyy')}</p>
								<p className='text-2xl'>{detailMoviesShowTimesInfo.tenPhim}</p>
								<p className='text-XLm'>{description && description.length > 100 ? <span>{description.substr(0, 100)}...</span> : <span>{description}</span>}</p>
							</div>
						</div>
						{/*RATING CIRCLE */}
						<div className="col-span-6 mt-12 mx-auto rating__circle">
							{/* CHART RATING */}
							<div class="clearfix animate__animated animate__pulse animate__infinite infinite">
								<div class={`c100 p${rating * 10} big green`}>
									<span>{(rating * 10)}%</span>
									<div class="slice">
										<div class="bar"></div>
										<div class="fill"></div>
									</div>
								</div>
							</div>

							{/* TEXT RATING */}
							<div className="text-center animate__animated animate__pulse animate__slower animate__infinite 	infinite">
								<p className='uppercase text-xl text-white'>Đánh giá </p>
								<Rate allowHalf value={rating / 2} className='text-green-500' />
							</div>
						</div>
					</div>

					{/* DETAIL SHOWTIMES RESPONSIVE */}
					<div className='ml-5 w-50 text-gray-700 bg-slate-200 p-1 rounded-sm detail_showtimes-responsive'>
						<p className='text-2xl'>Ngày chiếu: {moment(detailMoviesShowTimesInfo.ngayKhoiChieu).format('d.mm.yyyy')}</p>
						<p className='text-2xl'>{detailMoviesShowTimesInfo.tenPhim}</p>
						<p className='text-XLm'>{description && description.length > 100 ? <span>{description.substr(0, 100)}...</span> : <span>{description}</span>}</p>
					</div>

					{/* DESCRIPTION TABLE */}
					<div className='bg-orange-300 py-10 px-12 mt-20 ml-64 w-2/3 description-table' style={{ minHeight: 500 }}>
						<Tabs defaultActiveKey="1" size={'small'} centered >
							<TabPane tab={
								<h1 className='text-xl'>Lịch chiếu</h1>
							} key="1" >
								<div>
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
																<div className='mb-5' key={indexGroupCinema}>
																	<div className="flex">
																		<img src={itemGroupCinema.hinhAnh} alt={itemGroupCinema.tenCumRap} style={{ width: '50px', height: '50px' }} />
																		<div className='ml-1 md:ml-5'>
																			<p className='md:text-md lg:text-xl md:leading-3 font-bold'>{itemGroupCinema.tenCumRap}</p>
																			<p className='text-sm mt-3 text-gray-500'>{itemGroupCinema.diaChi}</p>
																		</div>
																	</div>
																	<div className="info-showtimes-movie mt-2 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
																		{itemGroupCinema.lichChieuPhim && itemGroupCinema.lichChieuPhim.map((itemInforShowtimesMovie, indexShowtimesMovies) => {

																			return (
																				// LINK TO CHECKOUT PAGE
																				<NavLink to={`/checkout/${itemInforShowtimesMovie.maLichChieu}`} className='text-sm col-span-1 text-green-700' key={indexShowtimesMovies}>
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
								<>
									<h1 className='text-xl mx-0 md:mx-5'>Thông tin</h1>
								</>
							} key="2" >
								<iframe src={detailMoviesShowTimesInfo.trailer} frameborder="0" className='w-full h-80 mx-auto'></iframe>
								<p className='w-50 mx-auto'>Trailer</p>
								<p className='text-lg md:text-xl mt-2 md:mt-5'>{description}</p>
							</TabPane>
							<TabPane tab={
								<h1 className='text-xl'>Đánh giá</h1>

							} key="3">
								<p className='text-xl'>Theo tổng cuộc bình chọn đánh giá từ phía người xem: </p>
								<span className='text-lg'>Tổng số sao: </span>
								<Rate allowHalf value={rating / 2} className='text-green-500' />
							</TabPane>
						</Tabs>
					</div>

					{/*WHICH CINEMA will WILL THIS MOVIE BE SHOWN*/}


				</CustomCard>
			</div>
		</>
	)
}



