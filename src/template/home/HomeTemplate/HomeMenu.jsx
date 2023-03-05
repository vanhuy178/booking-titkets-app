import { Tabs } from 'antd';
import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import TitleHeader from '../../../components/TitleHeader';
const { TabPane } = Tabs;

class HomeMenu extends React.PureComponent {
	state = {
		tabPosition: 'left',
		showtimes: false
	};

	changeTabPosition = tabPosition => {
		this.setState({ tabPosition });
	};

	renderCinemaSystem = () => {


		return this.props.listCenimaSystem && this.props.listCenimaSystem.map((item, index) => {
			return (
				<TabPane tab={<img src={item.logo} alt={item.tenHeThongRap} className={`home-menu-c rounded-full animate__animated animate__backInDown animate__delay-${index + 1}00ms `} width='50' />} key={index}>
					<Tabs tabPosition={this.state.tabPosition}>
						{item.lstCumRap && item.lstCumRap.map((itemCinema, indexCinema) => {
							return (
								<TabPane tab={
									// TAB RIGHT
									<div style={{ width: '300px' }} className={`name_of_cinema animate__animated animate__backInDown animate__delay-${index + 1}00ms`}>
										<img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" alt='Hello' width='50' />
										<div className="text-left">
											<p className='text-sm'>{itemCinema.tenCumRap}</p>
											<p>Chi tiết</p>
										</div>
									</div>

								} key={indexCinema}>
									<div >
										{itemCinema.danhSachPhim && itemCinema.danhSachPhim.map((movieItem, movieIndex) => {
											return (
												<>
													<div className={`my-3 md:my-5 flex flex-col sm:flex-row animate__animated animate__backInDown animate__delay-${index + 1}00ms`} key={movieIndex}>
														<img src={movieItem.hinhAnh} alt={movieItem.tenPhim + movieIndex} style={{ width: '100px', height: '100px' }} onError={(e) =>
															(e.target.onerror = null)(
																(e.target.src =
																	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
															)
														} />

														<div className='ml-1 sm:ml-5 relative' >
															<p className='text-xl text-green-600'>{movieItem.tenPhim}</p>
															<p className='text-xl text-red-500 font-bold animate__animated animate__heartBeat animate__infinite infinite text-center inline-block'>HOT</p>
															<p className={`uppercase font-bold ${movieItem.dangChieu === true ? 'text-green-600' : ''}`}>{movieItem.dangChieu === true ? 'ĐANG CHIẾU' : ''}</p>
															<p className={`uppercase  font-bold ${movieItem.sapChieu === true ? 'text-yellow-500' : ''}`}>{movieItem.sapChieu === true ? 'SẮP CHIẾU' : ''}</p>
															<p>{itemCinema.diaChi}</p>
															<p className='text-lg mt-1'>Ngày chiếu và thời gian chiếu: </p>

															<p className='text-blue-600 uppercase mt-2'

																data-toggle="collapse"
																data-target={`#HomeMenu-${movieIndex}`}
															// data-target={`#exampleModal`}
															>
																xem lịch chiếu</p>
															{this.showModal(movieItem, movieIndex, itemCinema)}
														</div>
													</div>
													<hr />
												</>
											)
										})}
									</div>

								</TabPane>
							)
						})}
					</Tabs>
				</TabPane>
			)
		})
	}



	showModal(movieItem, movieIndex, itemCinema) {
		return (
			<>
				<div className="collapse" id={`HomeMenu-${movieIndex}`}>
					<div className="card card-body">
						<title className='mb-1'>
							<h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết: </h5>
							<h5 className="modal-title">Tên Rạp: {itemCinema.tenCumRap}. </h5>
							<h5 className="modal-title">Tên phim: {movieItem.tenPhim}</h5>
						</title>
						<div className="listShowtimes grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
							{movieItem.lstLichChieuTheoPhim && movieItem.lstLichChieuTheoPhim.map((itemShowTimeMovies, indexShowTimeMovies) => {
								return (
									<div>

										<NavLink to={`/checkout/${itemShowTimeMovies.maLichChieu}`}

											className={`text-green-500 text-sm mb-5 block
									animate__animated animate__swing animate__delay-${indexShowTimeMovies + 1}00ms `}
											key={indexShowTimeMovies}>
											<p>{itemShowTimeMovies.tenRap}</p>
											<p>
												{moment(itemShowTimeMovies.ngayChieuGioChieu).format('d/m/yy')}
											</p>
											<p>
												{moment(itemShowTimeMovies.ngayChieuGioChieu).format('hh:mm a')}
											</p>
											<p>Giá vé: {itemShowTimeMovies.giaVe}</p>
										</NavLink>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</>
		)
	}
	render() {
		return (
			<>
				<div className='home-menu-layout'>
					<TitleHeader titleHeader={'Danh sách hệ thống rạp'} />
					<div style={{ maxHeight: '700px', overflow: 'auto' }} className='main-home-menu'>
						<div className=''>
							<Tabs tabPosition={this.state.tabPosition} className='home-menu  bg-white' >
								{this.renderCinemaSystem()}
							</Tabs>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default connect()(HomeMenu);

