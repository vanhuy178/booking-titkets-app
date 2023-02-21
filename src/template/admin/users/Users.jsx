import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DeletingMessage } from '../../../components/ModalMessage';
import { deleteUserAction, getDataUserAction } from '../../../redux/actions/ManagingUserAction';

function Users() {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getDataUserAction());
        }, [])

    const { dataUser, messageDelete } = useSelector(state => state.managingUserStore);
    const [showMessage, setShowMessage] = useState(false);
    const [search, setSearch] = useState('');
    const data = dataUser

    const handleChange = (pagination, filters, sorter) => {

        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (value, item, index) => {
                return <span key={index}>{index + 1}</span>
            },
            width: '5%'
        },
        {
            title: 'Họ và tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
            filteredValue: filteredInfo.hoTen || null,
            onFilter: (value, record) => record.hoTen.includes(value),
            sorter: (a, b) => a.hoTen.length - b.hoTen.length,
            sortOrder: sortedInfo.columnKey === 'hoTen' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            key: 'matKhau',
            filteredValue: filteredInfo.matKhau || null,
            onFilter: (value, record) => record.taiKhoan.includes(value),
        },
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            filteredValue: filteredInfo.taiKhoan || null,
            onFilter: (value, record) => record.taiKhoan.includes(value),

        },
        {
            title: 'Số diện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
            filteredValue: filteredInfo.soDt || null,
            onFilter: (value, record) => record.soDt.includes(value),

        },
        {
            title: 'Loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            filters: [
                {
                    text: "Khách Hàng",
                    value: 'KhachHang'
                },
                {
                    text: 'Quản trị',
                    value: 'QuanTri'
                }
            ],
            filteredValue: filteredInfo.maLoaiNguoiDung || null,
            onFilter: (value, record) => record.maLoaiNguoiDung.includes(value),
            width: '15%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            render: (item, user) => {

                return <>
                    <span
                        onClick={async () => {
                            if (window.confirm('Bạn có chắc muốn xóa người dùng: ' + user.taiKhoan + ' không?')) {
                                await dispatch(deleteUserAction(user.taiKhoan));
                                await setTimeout(() => setShowMessage(true), 900)
                            }
                        }}
                        className=' text-2xl text-red-500 leading-3 cursor-pointer mx-3'>
                        <DeleteOutlined /></span>
                </>
            }
        }
    ];


    return (
        <>
            {/* SEARCH BAR */}
            <div className="flex flex-col p-2 py-1 m-h-screen">
                <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-2 sticky" style={{ top: 5 }}>

                    <div>
                        <div onClick={async () => {

                            await dispatch(getDataUserAction())
                            await setSearch('')
                        }
                        }
                            className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                            <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <input className='rounded-full w-full p-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
                        type="text"
                        value={search || ''}
                        placeholder="nhập tên người dùng"
                        onChange={(e) => { setSearch(e.target.value) }}
                    />

                    <div onClick={() => dispatch(getDataUserAction(search))}

                        className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
                    <div className="lg:text-2xl md:text-xl text-lg lg:p-3 p-1 font-black text-gray-700">Danh sách người dùng</div>
                </div>
            </div>
            <NavLink
                to='/admin/users/adduser'
                className='inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                THÊM NGƯỜI DÙNG
            </NavLink>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
            {showMessage ? <DeletingMessage messageDelete={messageDelete} setShowMessage={setShowMessage} /> : ''}
        </>
    );
}

export default memo(Users)