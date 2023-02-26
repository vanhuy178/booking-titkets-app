import React, { useState } from 'react'
import './styleCompononent/Adv.scss';
import LogoAdv from '../assets/image/bestDev.png'
export default function Adv() {
    const [show, setShow] = useState(true);
    return (
        show ? (
            <div className="modal-adv animate__animated animate__fadeInUp animate__delay-4s" style={{ height: '550px', width: '350px' }}>
                <div className="closed text-gray-300 text-3xl text-right" onClick={() => setShow(false)}>X</div>
                <p className='adv-title text-red-500 text-uppercase text-3xl'>Phim hot</p>
                <img src={LogoAdv} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
        ) : null
    )
}


