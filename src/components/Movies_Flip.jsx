import React, { useState } from 'react'
import './styleCompononent/Movies_Flip.scss';
import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
function Movies_Flip(props) {
    const { hinhAnh, hot, maPhim, tenPhim, trailer } = props.moviesItem;
    const configErrorImage = (e) => {
        e.target.onerror = null
        e.target.src = 'https://picsum.photos/300/300';
    }
    return (
        <>
            {/*  ${hot ? 'animate__animated animate__heartBeat animate__infinite	infinite' : ''} */}
            <div className={`flip-card mt-1`}>
                <div className="flip-card-inner" data-toggle="modal" data-target="#exampleModal">
                    <div className="flip-card-front">
                        {/* <h2 className={`hot-hot-hot absolute top-0 -left-4 -rotate-45 hot-text`}>{hot ? "HOT" : ''}</h2> */}
                        <div className='hot-hot-hot absolute top-0 -left-4 -rotate-45 hot-text'>
                            <h2 class="text_shadows">{hot ? "HOT" : ''}</h2>
                        </div>
                        <img src={hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={configErrorImage} />
                    </div>
                    <div
                        className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                        <div

                            style={{ position: 'absolute', top: 0, left: 0 }} >
                            <img src={hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={configErrorImage} />
                        </div>
                        {/* LAYOUT */}
                        {/* ADD EVENT TO SHOW TRAILER */}
                        <a
                            href={trailer}
                            className="hw-full flex-center-center items-stretch hover:text-indigo-400" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.7)' }}>
                            <div className='mt-28'>
                                <div className="rounded-full cursor-pointer "><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                                <div className="text-xl mt-2 font-bold">{tenPhim}</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/*
                    REDIRECT TO DETAIL PAGE WITH AN ID
                */}
                <div className="booking-btn hover:bg-indigo-400 hover:text-white"
                >
                    <NavLink to={`/detail/${maPhim}`}>ĐẶT VÉ</NavLink>
                </div>
            </div>

        </>

    )
}

export default Movies_Flip;