import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_UPCOMING_FILM, SET_WATCHNG_FILM } from "../../redux/types/ManagingMoviesType";
import Movies_Flip from "../Movies_Flip";
import styleSlick from './styleSlick.module.css';
import '../styleCompononent/slider.scss';

export default function MultipleRows(props) {


    // WE RECEIVE FUNCTION TO RENDER A LIST MOVIES RIGHT HERE
    const renderListMovie = () => {
        return props.listMovies.map((item, index) => {
            return (<div className="mt-5">
                <Movies_Flip moviesItem={item} key={index} />
            </div>)
        })
    }



    // CUSTOMIZE LIBRAY
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-next']} right-0`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
            </div>

        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-prev']}`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
            </div>
        );
    }
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: "-20px",
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0",
                }
            }
        ],

    };
    // CREATE DISPATH ACTION USE USEDIPATH
    const dispatch = useDispatch();

    const { watchingMovies, upcomingMovies } = useSelector(state => state.managingMoviesStore);

    let activeClassWatching = watchingMovies === true ? 'active_Film' : 'none_active_Film';
    let activeClassUpcoming = upcomingMovies === true ? 'active_Film' : 'none_active_Film';
    return (
        <div className='md:container carousel-card__item'>
            <button className={`watching-movies px-4 py-1 sm:px-8 sm:py-3 font-semibold rounded ${styleSlick[activeClassWatching]} ml-14 mx-10 border`}
                onClick={() => {
                    let action = {
                        type: SET_WATCHNG_FILM
                    }
                    dispatch(action)
                }}
            >ĐANG CHIẾU</button>
            <button className={`upcoming-movies px-4 py-1 sm:px-8 sm:py-3 font-semibold rounded ${styleSlick[activeClassUpcoming]} border`}
                onClick={() => {
                    let action = {
                        type: SET_UPCOMING_FILM
                    }
                    dispatch(action)
                }}
            >PHIM SẮP CHIẾU</button>
            <Slider {...settings} >
                {renderListMovie()}
            </Slider>
        </div>
    );

}