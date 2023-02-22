
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { headerTitleOFRigisterORLogin, mainBackgroundColor } from '../../../../assets/constant';
import ButtonBack from '../../../../components/ButtonBack';
import { getDataUserAction, addUserInfo } from '../../../../redux/actions/ManagingUserAction';
import { IDGROUP } from '../../../../utils/settings/config';

export default function ChangePassword() {
    const [search, setSearch] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const { dataUser } = useSelector(state => state.managingUserStore);
    let info
    if (dataUser.length !== 0) {
        info = {
            taiKhoan: dataUser[0].taiKhoan,
            matKhau: newPassword,
            email: dataUser[0].email,
            soDt: dataUser[0].soDt,
            maLoaiNguoiDung: dataUser[0].maLoaiNguoiDung,
            hoTen: dataUser[0].hoTen,
            maNhom: IDGROUP
        }
    }
    return (
        <>
            <ButtonBack address='/login' />
            <div className={`${mainBackgroundColor} w-50`}>
                <div className=" mt-5 mx-auto w-3/4">
                    <h1 className={headerTitleOFRigisterORLogin}>Đổi mật khẩu</h1>
                    <h1>Vui lòng nhập tài khoản</h1>
                    <input
                        value={search || ''}
                        onChange={(e) => setSearch(e.target.value)}
                        className='block w-full mt-3 py-1 bg-pink-300 text-white mb-1 rounded-sm'
                        type="text" /><br />

                    <button
                        onClick={() => dispatch(getDataUserAction(search))}
                        className="btn btn-primary mt-0"
                    >Xác nhậntài khoản</button>


                    <h1>mật khẩu cũ</h1>
                    <div className="relative">
                        <input
                            value={dataUser.length !== 0 ? dataUser[0].matKhau : ''}
                            // onChange={(e) => setSearch(e.target.value)}
                            className='block w-full mt-3 py-1 bg-pink-300 text-white mb-3 rounded-sm'
                            type={show ? 'text' : 'password'} placeholder='' /><br />
                        <div className="icons-show-hide absolute right-1 top-0" onClick={() => setShow(!show)}>
                            {show ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </div>
                    </div>

                    <h1>Vui lòng nhập mật khẩu mới</h1>
                    <div className="relative">
                        <input
                            name='newPassword'
                            value={newPassword || ''}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='block w-full mt-3 py-1 bg-pink-300 text-white mb-3 rounded-sm'
                            type={show ? 'text' : 'password'} /><br />
                        <div className="icons-show-hide absolute right-1 top-0" onClick={() => setShow(!show)}>
                            {show ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            await dispatch(addUserInfo(info))
                            await history.goBack()
                        }}
                        className="btn btn-primary"
                    >Đổi mật khẩu</button>
                </div>
            </div>
        </>
    )
}
