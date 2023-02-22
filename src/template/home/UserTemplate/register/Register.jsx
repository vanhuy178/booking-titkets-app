
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterClass } from '../../../../models/RegisterClass';
import { buttonSubmit, headerTitleOFRigisterORLogin, inputText, mainBackgroundColor, messageError, notBlank, titleMini } from '../../../../assets/constant';
import ModalMessage, { MessageRegister } from '../../../../components/ModalMessage';
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
      <div className={mainBackgroundColor} style={{ height: '100vh' }}>

        <form onSubmit={formik.handleSubmit} className='ml-5 sm:ml-10 md:ml-40 mx-20 lg:ml-0 lg:mx-40'>

          {/* REGISTER */}
          <h1 className={`${headerTitleOFRigisterORLogin} pt-10 lg:pt-2`}>Đăng ký</h1>

          {/* TAI KHOAN */}
          <label htmlFor="taiKhoan" className={titleMini}>Tài khoản</label>
          <input className={inputText}
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
          <label htmlFor="matKhau" className={titleMini}>Mật khẩu</label>
          <input className={inputText}
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
          <label htmlFor="email" className={titleMini}>Email</label>
          <input className={inputText}
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
          <label htmlFor="hoTen" className={titleMini}>Họ và tên</label>
          <input className={inputText}
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
          <label htmlFor="soDt" className={titleMini}>Số điện thoại</label>
          <input className={inputText}
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
          <label htmlFor="maNhom" className={titleMini}>Mã nhóm</label>
          <input className={inputText}
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

          <button className={buttonSubmit} type="submit" onClick={() => setShowMessageRegister(true)}>Submit</button>
        </form>
        {showMessageRegister ? <MessageRegister messageUserRegister={messageUserRegister} showMessageRegister={showMessageRegister} setShowMessageRegister={setShowMessageRegister} /> : ''}
      </div>
    </>
  )
}

export default Register;