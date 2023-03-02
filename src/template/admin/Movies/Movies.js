import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMoviesAcition, fetchMovies } from '../../../redux/actions/ManagingMovies';
import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export default function AdminMovies() {
    const dispatch = useDispatch();
    const { listMovies } = useSelector(state => state.managingMoviesStore);
    const [search, setSearch] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchMovies());
    }, [])
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            render: (text, row) => {
                return <a> {row.maPhim} </a>
            },
            // here is that finding the name started with `value`
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '10%'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, row) => {
                return <>
                    <div className='relative' data-toggle="modal" data-target={`#exampleModal-${String(row.maPhim)}`}>
                        <img src={row.hinhAnh} alt={row.maPhim} width='40' height='50'
                            onError={(e) => { e.target.onError = null; e.target.src = 'https://picsums.photos/100/50' }} />
                        {row.hot ?
                            <div className='absolute text-2xl text-red-600 -top-7 right-5 hot-hot-hot font-bold'>
                                <h2 class="text_shadows">Hot</h2>
                            </div> :
                            ''
                        }
                        <div className="modal fade" id={`exampleModal-${String(row.maPhim)}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" style={{ maxWidth: '900px' }}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title font-bold text-2xl" id="exampleModalLabel">{row.tenPhim}</h5>

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body p-0">
                                        <div>
                                            <img src={row.hinhAnh} alt={row.tenPhim} style={{ width: '100%' }} />
                                        </div>

                                        <p className='mt-10 ml-10 text-xl'>{row.moTa}</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary text-gray-800" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            },
            width: '10%'
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            onFilter: (value, record) => record.tenPhim.indexOf(value) === 0,
            width: '30%'
        },
        {
            title: 'Đang chiếu',
            dataIndex: 'dangChieu',
            render: (text, row) => row.dangChieu ? <span>Đang chiếu</span> : '',
            width: '20%'
        },
        {
            title: 'Sắp chiếu',
            dataIndex: 'sapChieu',
            render: (text, row) => row.sapChieu ? <span>Sắp chiếu</span> : ''
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (text, movies) => {
                return <>
                    <NavLink key={1} to={`/admin/movies/edit/${movies.maPhim}`} className='text-2xl text-blue-500 leading-3'><EditOutlined /></NavLink>
                    <span onClick={() => {
                        // CONFRIM
                        if (window.confirm('Bạn chắc có muốn xóa phim' + movies.tenPhim)) {
                            // INVOKE ACTION
                            dispatch(deleteMoviesAcition(movies.maPhim))
                        }
                    }} key={2} className=' text-2xl text-red-500 leading-3 cursor-pointer mx-3'
                    ><DeleteOutlined /></span>

                    <NavLink
                        to={`/admin/movies/showtimes/${movies.maPhim}/${movies.tenPhim}`}
                        className='text-2xl text-yellow-500 leading-3'><CalendarOutlined
                            onClick={() => localStorage.setItem('moviesparam', JSON.stringify(movies))}
                        /></NavLink>
                </>
            }
        }
    ];
    const data = listMovies;
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <>
            {/* SEARCH BAR */}
            <div className="flex flex-col p-2 py-1 m-h-screen">
                <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-2 sticky" style={{ top: 5 }}>

                    <div onClick={async () => {
                        await dispatch(fetchMovies())
                        await setSearch('')
                    }

                    }>
                        <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                            <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <input className='rounded-full w-full p-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
                        type="text"
                        placeholder="Tên phim"
                        value={search || ''}
                        onChange={(e) => { setSearch(e.target.value) }}

                    />
                    <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full"
                        onClick={() => {
                            console.log(search);
                            dispatch(fetchMovies(search))
                        }
                        }
                    >
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
                    <div className="lg:text-2xl md:text-xl text-lg lg:p-3 p-1 font-black text-gray-700">Danh sách phim </div>
                </div>
            </div>

            {/* BUTTON */}
            <NavLink to='/admin/movies/addnew' className='inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                THÊM PHIM
            </NavLink>

            {/* TABLE */}
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey="Id of the movie" />
        </>
    )
}
