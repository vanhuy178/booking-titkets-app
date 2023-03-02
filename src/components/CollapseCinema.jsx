import moment from 'moment'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
function CollapseCinema(props) {

    const renderCard = () => {
        return props.listCenimaSystem && props.listCenimaSystem.map((itemCinema, indexCinema) => {
            return (
                <div className="card">
                    <div className="card-header" id={`headingOne-${indexCinema}`}>
                        <h5 className="mb-0">
                            <div className="btn btn-link d-flex items-center" data-toggle="collapse" data-target={`#collapseOne-${indexCinema}`} aria-expanded="true" aria-controls="collapseOne">
                                <img src={itemCinema.logo} alt={itemCinema.tenHeThongRap} width={50} />
                                <span className='pl-4 text-red-500 font-bold animate__animated animate__heartBeat animate__infinite infinite'>{itemCinema.tenHeThongRap}</span>
                            </div>
                        </h5>
                    </div>
                    <div id={`collapseOne-${indexCinema}`} className="collapse show" aria-labelledby={`headingOne-${indexCinema}`} data-parent="#accordion">
                        <div id={`accordion-${indexCinema}`}>

                            {itemCinema.lstCumRap && itemCinema.lstCumRap.map((itemListCinemaSystem, indexListCinemaSystem) => {
                                return (
                                    <div class="card" key={indexListCinemaSystem}>
                                        <div class="card-header" id={`headingOneTwo-${indexListCinemaSystem}`}>
                                            <h5 class="mb-0 pl-4 animate__animated animate__pulse animate__infinite infinite">
                                                <button class="btn btn-link" data-toggle="collapse" data-target={`#collapseOneTwo-${indexListCinemaSystem}`} aria-expanded="true" aria-controls="collapseOneTwo">
                                                    <span className='text-red-500'>
                                                        {itemListCinemaSystem.tenCumRap}
                                                    </span>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id={`collapseOneTwo-${indexListCinemaSystem}`} class="collapse show" aria-labelledby={`headingOneTwo-${indexListCinemaSystem}`} data-parent={`#accordion-${indexCinema}`}>
                                            <div class="card-body">

                                                {itemListCinemaSystem.danhSachPhim && itemListCinemaSystem.danhSachPhim.map((itemListMovies, indexListMovies) => {
                                                    return <div className='mb-5 ml-1 sm:ml-5 relative' >
                                                        <img src={itemListMovies.hinhAnh} alt={itemListMovies.tenPhim + indexListMovies} style={{ width: '100px', height: '100px' }} onError={(e) =>
                                                            (e.target.onerror = null)(
                                                                (e.target.src =
                                                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                                                            )
                                                        } />
                                                        <p className='text-xl text-green-600'>{itemListMovies.tenPhim}</p>
                                                        <p className='text-xl text-red-500 font-bold animate__animated animate__heartBeat animate__infinite infinite text-center inline-block'>HOT</p>
                                                        <p className={`uppercase font-bold ${itemListMovies.dangChieu === true ? 'text-green-600' : ''}`}>{itemListMovies.dangChieu === true ? 'ĐANG CHIẾU' : ''}</p>
                                                        <p className={`uppercase  font-bold ${itemListMovies.sapChieu === true ? 'text-yellow-500' : ''}`}>{itemListMovies.sapChieu === true ? 'SẮP CHIẾU' : ''}</p>
                                                        <p>{itemCinema.diaChi}</p>
                                                        <p className='text-lg mt-1'>Ngày chiếu và thời gian chiếu: </p>

                                                        <p className='text-blue-600 uppercase mt-2'
                                                            // onClick={() => this.setState({ showtimes: !this.state.showtimes })}
                                                            data-toggle="modal" data-target={`#exampleModal-${indexListMovies}`}
                                                        >
                                                            xem lịch chiếu</p>
                                                        {/* Modal */}
                                                        <div className="modal fade" id={`exampleModal-${indexListMovies}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ maxHeight: '700px' }}>
                                                            <div className="modal-dialog" style={{ maxWidth: '800px' }}>
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết: </h5>
                                                                        <h5 className="modal-title">Tên Rạp: {itemCinema.tenCumRap}. </h5>
                                                                        <h5 className="modal-title">Tên phim: {itemListMovies.tenPhim}</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">×</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body overflow-y-auto">

                                                                        {itemListMovies.lstLichChieuTheoPhim && itemListMovies.lstLichChieuTheoPhim.map((itemShowTimeMovies, indexShowTimeMovies) => {
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
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div id="accordion" className='collapse-home-menu'>
            {renderCard()}
        </div>

    )
}
export default memo(CollapseCinema)