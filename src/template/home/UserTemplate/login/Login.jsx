import React, { useEffect, useState, } from 'react'
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUserLogin } from '../../../../redux/actions/ManagingUserAction';
import { MessageLogin } from '../../../../components/ModalMessage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { buttonSubmit, headerTitleOFRigisterORLogin, mainBackgroundColor, notBlank, titleMini } from '../../../../assets/constant';
import { UserLoginClass } from '../../../../models/LoginClass';
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
});



const Login = () => {
    const [showMEssageLogin, setShowMessageLogin] = useState(false);
    const { messageUserLogin } = useSelector(state => state.managingUserStore)
    const dispatch = useDispatch()

    return (
        <>
            <ButtonBack address='./home' />
            <div className={`w-full lg:w-2/4 ${mainBackgroundColor}`} >
                <div className="flex items-center justify-center" style={{ height: '100vh' }}>
                    <div className="mt-10 lg:mt-40">
                        <h1 className={headerTitleOFRigisterORLogin}>Đăng nhập</h1>
                        <Formik
                            initialValues={new UserLoginClass()}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                const action = postUserLogin(values)
                                dispatch(action)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='w-80 sm:w-96'>
                                    {/*USERNAME */}
                                    <h1 className={titleMini}>Thông tin tài khoản</h1>
                                    <Field name="taiKhoan" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm' />
                                    {errors.taiKhoan && touched.taiKhoan ? (
                                        <div className='text-red-500 text-sm'>{errors.taiKhoan}</div>
                                    ) : null}
                                    {/* PASSWORD */}
                                    <h1 className={titleMini}>Mật khẩu</h1>
                                    <Field name="matKhau" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm' type='password' />
                                    {errors.matKhau && touched.matKhau ? (
                                        <div className='text-red-500 text-sm'>{errors.matKhau}</div>
                                    ) : null}
                                    <div className='flex justify-between'>
                                        <NavLink to='/login/update' className='mb-1'>Quên mật khẩu ?</NavLink>
                                        {/* <NavLink to='/login/update/password' className='mb-1'>Đổi mật khẩu ?</NavLink> */}
                                    </div>

                                    <div>Bạn chưa có tài khoản?
                                        <NavLink to='/register' className='text-red-400 font-bold'> Đăng ký</NavLink>
                                    </div>
                                    <button className={buttonSubmit}
                                        type='submit'
                                        onClick={() => setShowMessageLogin(true)}
                                    >ĐĂNG NHẬP</button>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {showMEssageLogin ? <MessageLogin messageUserLogin={messageUserLogin} setShowMessageLogin={setShowMessageLogin} /> : ""}
        </>
    )
}

export default Login;