import React, { useState } from 'react'
import style from './style.module.scss';
import {
    Form,
    DatePicker,
    InputNumber,
    Select,
    Rate,

} from 'antd';
import { history } from '../../../App'
import { useEffect } from 'react';
import { managingCenima } from '../../../services/manageCinema';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SHOWTIME_CINEMA_DEPEAT, ADD_SHOWTIME_CINEMA_SUCCESSFULLY } from '../../../redux/types/CinemaType';
import { MessageShowTimes } from '../../../components/ModalMessage';


export default function Showtime(props) {
    const [state, setState] = useState({
        cinemaSystem: [],
        groupCinemaSystem: [],
        messageErrors: ''
    })
    const { messageCenimaStatus } = useSelector(state => state.managingCenimaStore);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    let movies = {};

    if (localStorage.getItem('moviesparam')) {
        movies = JSON.parse(localStorage.getItem('moviesparam'))
    }
    const formik = useFormik({
        initialValues: {
            maPhim: movies.maPhim,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (value) => {
            try {
                let result = await managingCenima.postShowtime(value);
                console.log(result);
                await dispatch({ type: ADD_SHOWTIME_CINEMA_SUCCESSFULLY, payload: result.data.content });
                await setShow(true);
                setTimeout(() => history.goBack(), 1000);
            } catch (error) {
                await dispatch({ type: ADD_SHOWTIME_CINEMA_DEPEAT, payload: error.response.data.content })
                await setState({ ...state, messageErrors: error.response.data.content });
                await setShow(true);

            }
        }
    })

    useEffect(() => {
        async function fetchDataOfCinema() {

            try {
                let result = await managingCenima.getInFoCinemaSystem();

                setState({
                    ...state, cinemaSystem: result.data.content
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataOfCinema()
    }, [])


    const handleChangeValueCenimaSystem = async (value) => {
        console.log(value);
        try {
            const result = await managingCenima.getInfoGroupCinemaSystem(value.trim().replace(/\s/g, ''))

            setState({
                ...state, groupCinemaSystem: result.data.content, messageErrors: ''
            })


        } catch (error) {
            setState({ ...state, messageErrors: error.response.data.content })
            console.log(error.response.data.content);
        }
    }

    const handleChangeValueGroupCinemaSystem = (value) => {
        formik.setFieldValue('maRap', value.trim().replace(/\s/g, ''))
    }

    const renderCenimaSystem = () => {
        return (
            state.cinemaSystem && state.cinemaSystem.map((itemCinemaSystem, indexCinemaSystem) => {
                return {
                    label: itemCinemaSystem.tenHeThongRap,
                    value: itemCinemaSystem.maHeThongRap
                }
            })
        )
    }

    const renderGroupCinema = () => {
        return state.groupCinemaSystem.map((itemGroupCinema, indexGroupCinema) => {
            return {
                label: itemGroupCinema.tenCumRap,
                value: itemGroupCinema.maCumRap
            }
        })
    }

    const handleOnOK = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', dayjs(value).format('DD/MM/YYYY hh:mm:ss'))
    }
    const handleChangeDate = value => {
        formik.setFieldValue('ngayChieuGioChieu', dayjs(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const handleChangeNumber = value => {
        formik.setFieldValue('giaVe', value)
    }

    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 7,
                }}
                wrapperCol={{
                    span: 15,
                }}
                layout="horizontal"
                style={{
                    width: '1000px',
                }}
            >
                <h1 className='text-3xl font-bold text-center mb-5'>T???o l???ch chi???u: {props.match.params.tenphim}</h1>
                <div className='flex items-center'>
                    <div className="image w-2/4">
                        <img src={movies.hinhAnh} alt="" className='w-50 h-60 mx-5 block' />
                        <p className='mt-2'>Th??ng tin l???ch chi???u: {dayjs(movies.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                        <p>????nh gi??:</p>
                        <Rate allowHalf value={Number(movies.danhGia) / 2} className='text-yellow-500' />
                    </div>
                    <div className="input-form w-full">

                        <Form.Item label="H??? th???ng r???p">
                            <Select
                                onChange={handleChangeValueCenimaSystem}
                                placeholder='Ch???n h??? th???ng r???p'
                                options={renderCenimaSystem()}

                            />
                        </Form.Item>

                        <Form.Item label="C???m r???p">
                            <Select style={{
                                maxWidth: 600,
                            }}
                                onChange={handleChangeValueGroupCinemaSystem}
                                placeholder='Ch???n c???m r???p'
                                options={renderGroupCinema()}
                            />
                            {/* <p className='text-red-500 text-sm'>{state.messageErrors || ""}</p> */}
                        </Form.Item>


                        <Form.Item label="DatePicker">
                            <DatePicker showTime format='DD/MM/YYY hh:mm:ss' onOk={handleOnOK} onChange={handleChangeDate} className={style['ant-picker-footer']} />
                        </Form.Item>

                        <Form.Item label="Gi?? v??">
                            <InputNumber min={75000} max={150000} onChange={handleChangeNumber} />
                            <p className='text-red-500 text-sm mt-2'>{state.messageErrors || ""}</p>
                        </Form.Item>


                        <Form.Item style={{ marginLeft: '160px', }}>
                            <button type='submit' className='rounded-sm' style={{ backgroundColor: '#007bff', fontSize: '20px', lineHeight: '10px', padding: '10px' }}>T???o l???ch chi???u</button>
                        </Form.Item>
                    </div>
                </div>

            </Form>

            {show ? <MessageShowTimes messageContent={messageCenimaStatus} /> : ''}
        </>
    );
};

