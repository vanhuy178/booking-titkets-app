import React from 'react'
import { Section } from './Section';
import TitleHeader from './TitleHeader';
import la1 from '../assets/image/la-1.jpg';
import la2 from '../assets/image/la-2.jpg';
import la3 from '../assets/image/la-3.jpg';
export default function Partner(props) {
    return (
        <Section>
            <TitleHeader titleHeader={"HÉ LỘ MỘT SỐ TIN TỨC MỚI VỀ BOM TẤN MỚI"} />
            {/* CAROUSEL */}
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <figure className="imghvr-slide-left carousel-item active " >
                        <img src={la1} alt="Los Angeles" className='w-full h-96' loading="lazy" />
                        <figcaption className='text-left'>
                            <h1 className='text-xl my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quo?</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit repellat, quae iusto architecto non, ipsam vitae eos quisquam delectus corporis repudiandae reiciendis officiis, earum dicta sequi voluptas facere nemo sunt?</p>
                        </figcaption>
                    </figure>
                    <figure className="imghvr-slide-left carousel-item" >
                        <img src={la2} alt="Los Angeles" className='w-full h-96' loading="lazy" />
                        <figcaption>
                            <h1 className='text-xl my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quo?</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit repellat, quae iusto architecto non, ipsam vitae eos quisquam delectus corporis repudiandae reiciendis officiis, earum dicta sequi voluptas facere nemo sunt?</p>

                        </figcaption>
                    </figure>
                    <figure className="imghvr-slide-left carousel-item" >
                        <img src={la3} alt="Los Angeles" className='w-full h-96' loading="lazy" />
                        <figcaption>
                            <h1 className='text-xl my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quo?</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit repellat, quae iusto architecto non, ipsam vitae eos quisquam delectus corporis repudiandae reiciendis officiis, earum dicta sequi voluptas facere nemo sunt?</p>
                        </figcaption>
                    </figure>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        </Section>
    )
}
