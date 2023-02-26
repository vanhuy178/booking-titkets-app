import React, { useState } from 'react'
import './styleCompononent/Movies_Flip.scss';
import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
function Movies_Flip(props) {
    const { hinhAnh, hot, maPhim, tenPhim, trailer } = props.moviesItem
    return (
        <>

            {/*  ${hot ? 'animate__animated animate__heartBeat animate__infinite	infinite' : ''} */}
            <div className={`flip-card mt-1`}>
                <div className="flip-card-inner" data-toggle="modal" data-target="#exampleModal">
                    <div className="flip-card-front">
                        <h2 className={`hot-hot-hot absolute text-4xl top-0 -left-4 -rotate-45 text-red-500 font-bold `}>{hot ? "HOT" : ''}</h2>
                        <img src={hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                    </div>
                    <div
                        className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                        <div

                            style={{ position: 'absolute', top: 0, left: 0 }} >
                            <img src={hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                        </div>
                        {/* LAYOUT */}
                        {/* ADD EVENT TO SHOW TRAILER */}
                        <div
                            className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.7)', display: 'flex', justifyContent: 'center', align: 'center' }}>
                            <div className='mt-28'>
                                <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                                <div className="text-xl mt-2 font-bold">{tenPhim}</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/*
                    REDIRECT TO DETAIL PAGE WITH AN ID
                */}
                <div className="text-center cursor-pointer py-4 bg-indigo-300 my-2 text-success-50 font-bold mb-1"
                >
                    <NavLink to={`/detail/${maPhim}`}>ĐẶT VÉ</NavLink>
                </div>
            </div>
        </>

    )
}

export default Movies_Flip;