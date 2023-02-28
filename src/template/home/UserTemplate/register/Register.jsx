
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterClass } from '../../../../models/RegisterClass';
import { messageError, notBlank } from '../../../../assets/constant';
import { MessageRegister } from '../../../../components/ModalMessage';
import * as Yup from 'yup';
import { registerUserAction } from '../../../../redux/actions/ManagingUserAction';
import './Register.scss';
import ButtonBack from '../../../../components/ButtonBack';


const SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string()
    .min(6, 'Tài khoản ít phải 6 kí tự!')
    .max(30, 'Tài khoản quá dày')
    .required(notBlank),
  matKhau: Yup.string()
    .min(8, 'Mật khẩu ít nhất 8 kí tự')
    .max(17, 'Mật khẩu quá dày!')
    .required(notBlank),
  soDt: Yup.string()
    .min(10, "Số điện thoại không hợp lệ!!!")
    .max(11, "Số điện thoại không hợp lệ!!!")
    .required(notBlank),
  hoTen: Yup.string()
    .min(2, 'Tài khoản ít phải ít nhất 2 kí tự!')
    .max(30, 'Tài khoản quá dày')
    .required(notBlank),
  maNhom: Yup.string()
    .min(3, 'Tài khoản ít nhất phải 3 kí tự')
    .required(notBlank),
  email: Yup.string().email('Email không hợp lệ').required(notBlank),
});

const Register = () => {
  const [showMessageRegister, setShowMessageRegister] = useState(false);
  const { messageUserRegister } = useSelector(state => state.managingUserStore)
  const dispatch = useDispatch()
  console.log(messageUserRegister);
  const formik = useFormik({
    initialValues: new RegisterClass(),
    validationSchema: SignupSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(registerUserAction(values));
    }
  })
  return (
    <>
      <ButtonBack address='./login' />
      <div className='main-bg-color' style={{ height: '100vh' }}>

        <form onSubmit={formik.handleSubmit} className='ml-5 sm:ml-10 md:ml-40 mx-20 lg:ml-0 lg:mx-40'>

          {/* REGISTER */}
          <h1 className='title-form mb-2pt-10 lg:pt-2'>Đăng ký</h1>

          {/* TAI KHOAN */}
          <label htmlFor="taiKhoan" className='lable-form'>Tài khoản</label>
          <input className='input-form lg:py-0'
            id="taiKhoan"
            name="taiKhoan"
            type="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
          />
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            messageError(formik.errors.taiKhoan)
          ) : null}

          {/* PASSWORD */}
          <label htmlFor="matKhau" className='lable-form'>Mật khẩu</label>
          <input className='input-form lg:py-0'
            id="matKhau"
            name="matKhau"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
          />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            messageError(formik.errors.matKhau)
          ) : null}

          {/* EMAIL */}
          <label htmlFor="email" className='lable-form'>Email</label>
          <input className='input-form lg:py-0'
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            messageError(formik.errors.email)
          ) : null}

          {/* HO VA TEN */}
          <label htmlFor="hoTen" className='lable-form'>Họ và tên</label>
          <input className='input-form lg:py-0'
            id="hoTen"
            name="hoTen"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hoTen}
          />
          {formik.touched.hoTen && formik.errors.hoTen ? (
            messageError(formik.errors.hoTen)
          ) : null}



          {/* SO DIEN THOAI */}
          <label htmlFor="soDt" className='lable-form'>Số điện thoại</label>
          <input className='input-form lg:py-0'
            id="soDt"
            name="soDt"
            type="soDt"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.soDt}
          />
          {formik.touched.soDt && formik.errors.soDt ? (
            messageError(formik.errors.soDt)
          ) : null}



          {/* MA NHOM */}
          <label htmlFor="maNhom" className='lable-form'>Mã nhóm</label>
          <input className='input-form lg:py-0'
            id="maNhom"
            name="maNhom"
            type="maNhom"
            placeholder='Vd: MP00, MP01, MP02,...'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maNhom}
          />
          {formik.touched.maNhom && formik.errors.maNhom ? (
            messageError(formik.errors.maNhom)
          ) : null}

          <button className="mt-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                  focus:outline-none focus:ring-red-100 
                dark:focus:ring-red-400 font-medium 
                  rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full"type="submit" onClick={() => setShowMessageRegister(true)}>Submit</button>
        </form>
        {showMessageRegister ? <MessageRegister messageUserRegister={messageUserRegister} showMessageRegister={showMessageRegister} setShowMessageRegister={setShowMessageRegister} /> : ''}
      </div>
    </>
  )
}

export default Register;