
import { Tabs, Select } from 'antd';
import React from 'react';
import { fetchListCenimaSystem } from '../../../redux/actions/CenimaAction';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
const { TabPane } = Tabs;

class HomeMenu extends React.PureComponent {
    state = {
        tabPosition: 'left',
    };

    changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
    };
    componentDidMount() {
    }

    renderCinemaSystem = () => {
        return this.props.listCenimaSystem?.map((item, index) => {
            return (
                <TabPane tab={<img src={item.logo} alt={item.tenHeThongRap} className='rounded-full' width='50' />} key={index}>
                    <Tabs tabPosition={this.state.tabPosition}>
                        {/* THE PICTURE IS THE SAME https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png*/}


                        {item.lstCumRap?.map((itemCinema, indexCinema) => {
                            return (
                                <TabPane tab={
                                    // TAB RIGHT
                                    <div style={{ width: '300px' }}>
                                        <img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" alt='Hello' width='50' />
                                        <div className="text-left">
                                            <p className='text-sm'>{itemCinema.tenCumRap}</p>
                                            <p>Chi tiết</p>
                                        </div>
                                    </div>

                                } key={indexCinema}>
                                    <div className="overflow-scrollY">
                                        {itemCinema.danhSachPhim && itemCinema.danhSachPhim.slice(0, 5).map((movieItem, movieIndex) => {
                                            return (
                                                <>
                                                    <div className='my-5 flex'>
                                                        <img src={movieItem.hinhAnh} alt={movieItem.tenPhim + movieIndex} style={{ width: '100px', height: '100px' }} onError={(e) =>
                                                            (e.target.onerror = null)(
                                                                (e.target.src =
                                                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                                                            )
                                                        } />

                                                        <div className='ml-5'>
                                                            <p className='text-xl text-green-600'>{movieItem.tenPhim}</p>
                                                            {/* USNG ANIMATION FOR HOT */}
                                                            <style>
                                                                {/*

                                                                .... CODDE
                                                                    Css for hot
                                                                */}
                                                            </style>
                                                            <p className='text-xl text-red-500 font-bold'>HOT</p>

                                                            <p className={`uppercase font-bold ${movieItem.dangChieu === true ? 'text-green-600' : ''}`}>{movieItem.dangChieu === true ? 'ĐANG CHIẾU' : ''}</p>
                                                            <p className={`uppercase  font-bold ${movieItem.sapChieu === true ? 'text-yellow-500' : ''}`}>{movieItem.sapChieu === true ? 'SẮP CHIẾU' : ''}</p>
                                                            <p>{itemCinema.diaChi}</p>
                                                            <p className='text-lg mt-1'>Ngày chiếu và thời gian chiếu: </p>
                                                            <div className="grid grid-cols-6 gap-20">
                                                                {movieItem.lstLichChieuTheoPhim && movieItem.lstLichChieuTheoPhim.slice(0, 5).map((itemShowTimeMovies, indexShowTimeMovies) => {
                                                                    return (
                                                                        <>
                                                                            {/* // USING MOMENT LIB TO FOTMAT TIME */}
                                                                            <NavLink to='/' className='text-green-500 text-xs w-56' key={indexShowTimeMovies}>
                                                                                <p>
                                                                                    {moment(itemShowTimeMovies.ngayChieuGioChieu).format('d/m/yy')}
                                                                                </p>
                                                                                <p className=''>
                                                                                    {moment(itemShowTimeMovies.ngayChieuGioChieu).format('hh:mm a')}
                                                                                </p>
                                                                            </NavLink>
                                                                        </>
                                                                    )
                                                                })}


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
        return (
            <div className='container'>
                <Tabs tabPosition={this.state.tabPosition} className=''>
                    {this.renderCinemaSystem()}
                </Tabs>
            </div>
        );
    }
}
export default connect()(HomeMenu);