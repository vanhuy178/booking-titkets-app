import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,
} from 'antd';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoMovies, uploadingFormData } from '../../../../redux/actions/ManagingMovies';
import { IDGROUP } from '../../../../utils/settings/config'
const EditMovies = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSource, setImageSource] = useState('');
    const dispatch = useDispatch();

    const { infoMoviesForEdit } = useSelector(state => state.managingMoviesStore)
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    console.log({ infoMoviesForEdit });
    useEffect(() => {
        dispatch(getInfoMovies(props.match.params.id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tenPhim: infoMoviesForEdit.tenPhim,
            trailer: infoMoviesForEdit.trailer,
            moTa: infoMoviesForEdit.moTa,
            ngayKhoiChieu: infoMoviesForEdit.ngayKhoiChieu,
            dangChieu: infoMoviesForEdit.dangChieu,
            sapChieu: infoMoviesForEdit.sapChieu,
            hot: infoMoviesForEdit.hot,
            danhGia: infoMoviesForEdit.danhGia,
            hinhAnh: infoMoviesForEdit.hinhAnh,
        },
        // WE NEED EXACT FORMATVALUE TO SEND DATA FOR BACKEND

        onSubmit: (values) => {
            values.maNhom = IDGROUP;
            console.log(values);
            //CREATE JSON PORMAT FROM FORMDATA
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            // USING POST REQUEST TO POST DATA 
            dispatch(uploadingFormData(formData))
        }
    })

    const handleChageDatePicker = (value) => {
        // IF YOU WANT TO SET VALUE FOR ngayKhoiChieu of initialValues using setFieldValue
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    // USE CLOSURE FUNCION
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeUploadFile = (e) => {
        let file = e.target.files[0];
        // CREATE OBJECT TO READ FILE
        if (file.type === 'image/png' || file.type === "image/jpeg" || file.type === 'image/jpg') {
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = e => {
                let base = e.target.result;
                setImageSource(base)
            }
        }

        formik.setFieldValue('hinhAnh', file)
    }
    /**
     * WE NEED ID IS PASSED BY MOVIES COMPONENT
     * WE NEED A STATE TO STORE IT IN MANAGING MOVIES REDUCER
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
    return (

        <>
            <h1 className="text-4xl font-bold uppercase text-center mb-5">chỉnh sữa phim</h1>
            <Form className=''
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>



                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format="DD/MM/YYYY" onChange={handleChageDatePicker} value={moment(formik.values.ngayKhoiChieu, 'DD/MM/YYYY')} />
                </Form.Item>




                <Form.Item label="Số sao">
                    <InputNumber name='danhGia' onChange={handleChangeNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name='dangChieu' className='bg-slate-400' onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch name='sapChieu' className='bg-slate-400' onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch name='hot' className='bg-slate-400' onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label='Hình ảnh'>
                    <input type='file' onChange={handleChangeUploadFile} accept='image/png, imagejpg' />
                    <br />
                    <img src={imgSource === "" ? infoMoviesForEdit.hinhAnh : imgSource} alt="chèn hình ảnh vào đây" width={150} height={150} />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-sm'>Cập nhật</button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditMovies;