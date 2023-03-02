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
																// onClick={() => this.setState({ showtimes: !this.state.showtimes })}
																data-toggle="modal" data-target={`#exampleModal-${movieIndex}`}
															>
																xem lịch chiếu</p>
															{/* Modal */}
															<div className="modal fade" id={`exampleModal-${movieIndex}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ maxHeight: '700px' }}>
																<div className="modal-dialog" style={{ maxWidth: '800px' }}>
																	<div className="modal-content">
																		<div className="modal-header">
																			<h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết: </h5>
																			<h5 className="modal-title">Tên Rạp: {itemCinema.tenCumRap}. </h5>
																			<h5 className="modal-title">Tên phim: {movieItem.tenPhim}</h5>
																			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
																				<span aria-hidden="true">×</span>
																			</button>
																		</div>
																		<div className="modal-body overflow-y-auto">

																			{movieItem.lstLichChieuTheoPhim && movieItem.lstLichChieuTheoPhim.map((itemShowTimeMovies, indexShowTimeMovies) => {
																				return (
																					<>
																						{/* // USING MOMENT LIB TO FOTMAT TIME */}
																						<NavLink to={`/checkout/${itemShowTimeMovies.maLichChieu}`}
																							className={`text-green-500 text-xl mb-5 block
																							animate__animated animate__swing animate__delay-${indexShowTimeMovies + 1}00ms `}
																							key={indexShowTimeMovies}>
																							<p>{itemShowTimeMovies.tenRap}</p>
																							<p>
																								{moment(itemShowTimeMovies.ngayChieuGioChieu).format('d/m/yy')}
																							</p>
																							<p className=''>
																								{moment(itemShowTimeMovies.ngayChieuGioChieu).format('hh:mm a')}
																							</p>
																							<p>Giá vé: {itemShowTimeMovies.giaVe}</p>
																						</NavLink>
																					</>
																				)
																			})}
																		</div>
																		<div className="modal-footer">
																			<button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button>
																		</div>
																	</div>
																</div>
															</div>
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

	render() {
		// animate__animated animate__backInUp animate__delay-4s


		return (
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
		);
	}
}
export default connect()(HomeMenu);

