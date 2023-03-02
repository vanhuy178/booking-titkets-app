import React, { useState } from 'react'
import './styleCompononent/Adv.scss';
import LogoAdv from '../assets/image/bestDev.png'
export default function Adv() {
    const [show, setShow] = useState(true);
    return (
        show ? (
            <div className="modal-adv animate__animated animate__fadeInUp animate__delay-4s" style={{ height: '550px', width: '350px' }}>
                <div className="closed text-gray-300 text-3xl text-right" onClick={() => setShow(false)}>X</div>
                {/* <p className='adv-title text-red-500 text-uppercase text-3xl z-50 hot-hot-hot'>Phim hot</p> */}
                <div className='adv-title text-red-500 text-uppercase text-3xl z-50 hot-hot-hot'>
                    <h2 class="text_shadows">Hot</h2>
                </div>
                {/* <img src={LogoAdv} alt="" style={{ width: '100%', height: '100%' }} /> */}
                <a href="https://youtu.be/0PGMXz_X8K8">
                    <figure className="imghvr-slide-down" style={{ width: '100%', height: '100%' }}>
                        <img src={LogoAdv} style={{ width: '100%', height: '100%' }} />
                        <figcaption className='text-center'>
                            <h1 className='uppercase text-2xl font-bold'>Chú ủn và những thằng bạn</h1>
                            <p className='mt-2'>N. Korea test-fires biggest intercontinental ballistic missile under commander Kim Jong Un</p>
                        </figcaption>
                    </figure>
                </a>


            </div>
        ) : null
    )
}


