import React, { useState } from 'react'
import style from './style.module.scss';
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
    InputNumber,
    Select,

} from 'antd';
import { useEffect } from 'react';
import { managingCenima } from '../../../services/manageCinema';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { ADD_SHOWTIME_CINEMA_DEPEAT, ADD_SHOWTIME_CINEMA_SUCCESSFULLY } from '../../../redux/types/CinemaType';


export default function Showtime(props) {
    const [state, setState] = useState({
        cinemaSystem: [],
        groupCinemaSystem: []
    })
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (value) => {
            console.log(value);
            try {
                let result = await managingCenima.postShowtime(value);
                dispatch({ type: ADD_SHOWTIME_CINEMA_SUCCESSFULLY, payload: result.data.content })
            } catch (error) {
                dispatch({ type: ADD_SHOWTIME_CINEMA_DEPEAT, payload: error.response.data })
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
        try {
            const result = await managingCenima.getInfoGroupCinemaSystem(value.trim().replace(/\s/g, ''))

            setState({
                ...state, groupCinemaSystem: result.data.content
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const handleChangeValueGroupCinemaSystem = (value) => {
        formik.setFieldValue('maRap', value)
    }

    const renderCenimaSystem = () => {
        return (
            state.cinemaSystem && state.cinemaSystem.map((itemCinemaSystem, indexCinemaSystem) => {
                return {
                    label: itemCinemaSystem.tenHeThongRap,
                    value: itemCinemaSystem.tenHeThongRap
                }
            })
        )
    }

    const renderGroupCinema = () => {
        return state.groupCinemaSystem.map((itemGroupCinema, indexGroupCinema) => {
            return {
                label: itemGroupCinema.tenCumRap,
                value: itemGroupCinema.tenCumRap
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
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 1000,
                }}
            >

                <h1 className='text-4xl font-bold text-center mb-5'>Tạo lịch chiếu</h1>

                <Form.Item label="Hệ thống rạp">
                    <Select
                        onChange={handleChangeValueCenimaSystem}
                        placeholder='Chọn hệ thống rạp'
                        options={renderCenimaSystem()}

                    />
                </Form.Item>


                <Form.Item label="Cụm rạp">
                    <Select style={{
                        maxWidth: 600,
                    }}
                        onChange={handleChangeValueGroupCinemaSystem}
                        placeholder='Chọn cụm rạp'
                        options={renderGroupCinema()}
                    />
                </Form.Item>


                <Form.Item label="DatePicker">
                    <DatePicker showTime format='DD/MM/YYY hh:mm:ss' onOk={handleOnOK} onChange={handleChangeDate} className={style['ant-picker-footer']} />
                </Form.Item>

                <Form.Item label="Giá vé">
                    <InputNumber min={75000} max={150000} onChange={handleChangeNumber} />
                </Form.Item>


                <Form.Item style={{ marginLeft: '160px', }}>
                    <button type='submit' className='rounded-sm' style={{ backgroundColor: '#007bff', fontSize: '20px', lineHeight: '10px', padding: '10px' }}>Tạo lịch chiếu</button>
                </Form.Item>

            </Form>
        </>
    );
};

