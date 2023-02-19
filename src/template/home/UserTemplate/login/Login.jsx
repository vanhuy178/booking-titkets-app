import React, { useEffect, useState, } from 'react'
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUserLogin } from '../../../../redux/actions/ManagingUserAction';
import ModalMessage from '../../../../components/ModalMessage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { mainBackgroundColor } from '../../../../assets/constant';


const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    matKhau: Yup.string()
        .min(8, 'Too Short!')
        .max(17, 'Too Long!')
        .required('Required'),
});



const Login = () => {
    const [showMEssageLogin, setShowMessageLogin] = useState(false);
    const { messageUserLogin } = useSelector(state => state.managingUserStore)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     setShowMessageLogin(false)
    // }, [])
    return (
        <>
            <div className={`w-2/4 ${mainBackgroundColor}`} >
                <div className="flex items-center justify-center">
                    <div className="mt-40">
                        <h1 className='text-5xl mb-3 font-bold text-center mb-2'>Đăng nhập</h1>
                        <Formik
                            initialValues={{
                                taiKhoan: '',
                                matKhau: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                                const action = postUserLogin(values)
                                dispatch(action)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='w-96'>
                                    {/*USERNAME */}
                                    <h1 className='text-pink-300 text-xl mb-2'>Thông tin tài khoản</h1>
                                    <Field name="taiKhoan" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm' />
                                    {errors.taiKhoan && touched.taiKhoan ? (
                                        <div className='text-red-500 text-sm'>{errors.taiKhoan}</div>
                                    ) : null}
                                    {/* PASSWORD */}
                                    <h1 className='text-pink-300 text-xl mb-2'>Mật khẩu</h1>
                                    <Field name="matKhau" className='block w-full py-1 bg-pink-300 text-white mb-3 rounded-sm' type='password' />
                                    {errors.matKhau && touched.matKhau ? (
                                        <div className='text-red-500 text-sm'>{errors.matKhau}</div>
                                    ) : null}

                                    <button className="mt-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                                focus:outline-none focus:ring-red-100 
                                dark:focus:ring-red-400 font-medium 
                                rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full"
                                        type='submit'

                                        onClick={() => setShowMessageLogin(true)}
                                    >ĐĂNG NHẬP</button>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {showMEssageLogin ? <ModalMessage messageUserLogin={messageUserLogin} setShowMessageLogin={setShowMessageLogin} /> : ""}
        </>
    )
}

export default Login;