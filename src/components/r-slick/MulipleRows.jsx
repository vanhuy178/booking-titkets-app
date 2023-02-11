import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_UPCOMING_FILM, SET_WATCHNG_FILM } from "../../redux/types/ManagingMoviesType";
import Movies from "../Movies";
import Movies_Flip from "../Movies_Flip";
import styleSlick from './styleSlick.module.css';


export default function MultipleRows(props) {


    // WE RECEIVE FUNCTION TO RENDER A LIST MOVIES RIGHT HERE
    const renderListMovie = () => {
        return props.listMovies.map((item, index) => {
            // className={`${styleSlick['width-item']}`}
            return (<div className="">
                <Movies_Flip moviesItem={item} key={index} />
            </div>)
        })
    }



    // CUSTOMIZE LIBRAY
    function SampleNextArrow(props) {
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
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-prev']}`}

                style={{ ...style, display: "block", left: '-50px' }}
                onClick={onClick}
            >
            </div>
        );
    }
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    // CREATE DISPATH ACTION USE USEDIPATH
    const dispatch = useDispatch()

    const { watchingMovies, upcomingMovies } = useSelector(state => state.managingMoviesStore);

    let activeClassWatching = watchingMovies === true ? 'active_Film' : 'none_active_Film';
    let activeClassUpcoming = upcomingMovies === true ? 'active_Film' : 'none_active_Film';
    return (
        <div className="container">
            <button className={`px-8 py-3 font-semibold rounded ${styleSlick[activeClassWatching]} ml-14 mx-10 border`}
                onClick={() => {
                    let action = {
                        type: SET_WATCHNG_FILM
                    }
                    dispatch(action)
                }}
            >ĐANG CHIẾU</button>
            <button className={`px-8 py-3 font-semibold rounded ${styleSlick[activeClassUpcoming]} border`}
                onClick={() => {
                    let action = {
                        type: SET_UPCOMING_FILM
                    }
                    dispatch(action)
                }}
            >PHIM SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderListMovie()}
                {renderListMovie()}
                {renderListMovie()}
                {renderListMovie()}
            </Slider>
        </div>
    );

}