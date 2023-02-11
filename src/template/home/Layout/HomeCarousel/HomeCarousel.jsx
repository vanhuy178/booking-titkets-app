import { Carousel, Radio } from 'antd';
import axios from 'axios';
import { useState, React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCarousel } from '../../../../redux/actions/CarouselAction';


export default function HomeCarousel() {
    const contentStyle = {
        height: '100vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const dispatch = useDispatch()
    const { listCarouselBanner } = useSelector((state) => state.carouselStore);
    useEffect(
        () => {
            // DISPATCH ACTION WITH REDUX THUNK
            // CAN DISPATCH A FUNCTION WITH A SUPPORT OF REDUX - THUNK
            // Because we was setting redux thunk , so we can pass into dispatch with a function
            // dispatch(action) ---> fetchCarousel() --> dispatch an action object to reducer
            dispatch(fetchCarousel())

        }, [])


    const renderImage = () => {
        return listCarouselBanner.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <Carousel >
                {renderImage()}
            </Carousel>
        </>
    )
}
