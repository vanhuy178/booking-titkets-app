import React, { useEffect, useState, } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUserLogin } from '../../../../redux/actions/ManagingUserAction';
import { MessageLogin } from '../../../../components/ModalMessage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { notBlank } from '../../../../assets/constant';
import { UserLoginClass } from '../../../../models/LoginClass';
import ButtonBack from '../../../../components/ButtonBack';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';


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
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.title = 'Đăng nhập - Cenima App';
    }, [])
    return (
        <>
            <ButtonBack address='./home' />
            <div className={`w-full lg:w-2/4 main-bg-color`} >
                <div className="flex-center-center" style={{ height: '100vh' }}>
                    <div className="mt-10 lg:mt-40">
                        <h1 className='text-5xl mb-3 font-bold text-center mb-2'>Đăng nhập</h1>
                        <Formik
                            initialValues={new UserLoginClass()}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                const action = postUserLogin(values)
                                dispatch(action)
                            }
                            }
                        >
                            {({ errors, touched }) => (
                                <Form className='w-80 sm:w-96'>
                                    {/*USERNAME */}
                                    <h1 className='text-pink-300 text-xl mb-2'>Thông tin tài khoản</h1>
                                    <Field name="taiKhoan" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm' />
                                    {errors.taiKhoan && touched.taiKhoan ? (
                                        <div className='text-red-500 text-sm'>{errors.taiKhoan}</div>
                                    ) : null}
                                    {/* PASSWORD */}
                                    <div className="relative">
                                        <h1 className='text-pink-300 text-xl mb-2'>Mật khẩu</h1>
                                        <Field name="matKhau" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm ' type={`${show ? "text" : "password"}`} />
                                        <div className="show_hide absolute top-0 right-0 z-50" onClick={() => setShow(!show)}>
                                            {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                        </div>
                                    </div>
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
                                    <button className='mt-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                                            focus:outline-none focus:ring-red-100 
                                            dark:focus:ring-red-400 font-medium 
                                            rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full'
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