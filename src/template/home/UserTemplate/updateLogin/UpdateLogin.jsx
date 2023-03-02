import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonBack from '../../../../components/ButtonBack';
import { getDataUserAction } from '../../../../redux/actions/ManagingUserAction';
export default function UpdateLogin() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()
  const { dataUser } = useSelector(state => state.managingUserStore);
  return (
    <>
      <ButtonBack address='/login' />
      <div className={`mx-auto lg:ml-0 w-50`}>
        <div className=" mt-5 mx-auto lg:w-3/4">
          <h1 className="text-5xl mb-3 font-bold text-center mb-2">Quên mật khẩu</h1>
          <input
            value={search || ''}
            onChange={(e) => setSearch(e.target.value)}
            className='block w-full mt-3 py-1 bg-pink-300 text-white mb-3 rounded-sm'
            type="text" placeholder='Vui lòng nhập thông tin tài khoản' /><br />
          <button
            onClick={() => dispatch(getDataUserAction(search))}
            className="btn btn-primary"
          >Gửi mật khẩu</button>
          <h1 className='mt-3 text-xl'>Thông tin tài khoản</h1>
          <p>Tài khoản: {dataUser.length !== 0 ? dataUser[0].taiKhoan : ''}</p>
          <p>Mật khẩu: {dataUser.length !== 0 ? dataUser[0].matKhau : ''}</p>

        </div>
      </div>

    </>
  )
}
