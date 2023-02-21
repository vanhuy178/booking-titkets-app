import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo } from '../../../redux/actions/ManagingUserAction';
import { IDGROUP } from '../../../utils/settings/config';
import { MessageRegister } from '../../../components/ModalMessage'

const required = 'Không được bỏ trống!!';
const tooShort = 'Quá ngắn';
const tooLong = 'Quá dày';
const SignupSchema = Yup.object().shape({

    taiKhoan: Yup.string()

        .min(5, tooShort)

        .max(30, tooLong)

        .required(required),

    matKhau: Yup.string()

        .min(8, tooShort)

        .max(18, tooLong)

        .required(required),

    email: Yup.string().email('Invalid email').required(required),
    // soDt: Yup.string().min(10, tooShort).max(10, tooLong),
    hoTen: Yup.string()
        .min(3, tooShort)
        .max(40, tooLong)
        .required(required),

});

const labelStyle = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase mt-4';
const inputstyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
const textError = 'text-sm text-red-500';
function validationNumber(value) {
    const reg = new RegExp('^[0-9]+$');
    let error;

    if (!value) {
        error = required;

    }
    else if (!reg.test(value)) {
        error = 'Số điện thoại không hợp lệ';
    }
    else if (value.length > 11) {
        error = tooLong
    }
    else if (value.length < 9) {
        error = tooShort
    }

    return error;

}
const AddUsers = () => {
    const dispatch = useDispatch();
    const [showMessageRegister, setShowMessageRegister] = useState(false);
    const { messageUserRegister } = useSelector(state => state.managingUserStore);

    return (
        <div>
            <h1 className="text-4xl font-bold uppercase text-center mb-5">THÊM THÔNG TIN NGƯỜI DÙNG</h1>
            <Formik

                initialValues={{

                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    soDt: "",
                    maNhom: IDGROUP,
                    maLoaiNguoiDung: "",
                    hoTen: ""

                }}

                validationSchema={SignupSchema}

                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    dispatch(addUserInfo(values))
                    console.log(values);
                }}
            >
                {({ errors, values, touched }) => (
                    <>
                        <Form className='w-full'>
                            <div className='flex  w-full'>
                                <div className='w-2/4 mx-2'>
                                    <label className={labelStyle}>Tài khoản</label>
                                    <Field name="taiKhoan" className={inputstyle} />
                                    {errors.taiKhoan && touched.taiKhoan ? (

                                        <div className={textError}>{errors.taiKhoan}</div>

                                    ) : null}

                                    <label className={labelStyle}>Mật khẩu</label>
                                    <Field name="matKhau" className={inputstyle} type='password' />
                                    {errors.matKhau && touched.matKhau ? (
                                        <div className={textError}>{errors.matKhau}</div>
                                    ) : null}

                                    <label className={labelStyle}>Họ và tên</label>
                                    <Field name="hoTen" type="hoTen" className={inputstyle} />
                                    {errors.hoTen && touched.hoTen ? <div className={textError}>{errors.hoTen}</div> : null}
                                </div>

                                <div className='w-2/4 mx-2'>
                                    <label className={labelStyle}>Email</label>
                                    <Field name="email" type="email" className={inputstyle} />
                                    {errors.email && touched.email ? <div className={textError}>{errors.email}</div> : null}

                                    <label className={labelStyle}>Số điện thoại</label>
                                    <Field name="soDt" type="soDt" className={inputstyle} validate={validationNumber} />
                                    {errors.soDt && touched.soDt ? <div className={textError}>{errors.soDt}</div> : null}

                                    <label className={labelStyle}>Loại người dùng</label>
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <label>
                                            <Field type="radio" name="maLoaiNguoiDung" value="KhachHang" />
                                            Khách hàng
                                        </label>
                                        <label>
                                            <Field type="radio" name="maLoaiNguoiDung" value="QuanTri" />
                                            Quản trị viên
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowMessageRegister(true)}
                                type='submit'
                                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-5 border border-gray-400 rounded shadow">
                                Button
                            </button>

                        </Form>
                    </>
                )}
            </Formik>

            {showMessageRegister ? <MessageRegister messageUserRegister={messageUserRegister} setShowMessageRegister={setShowMessageRegister} /> : null}
        </div >

    );
}


export default AddUsers;