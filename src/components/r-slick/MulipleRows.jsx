import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_UPCOMING_FILM, SET_WATCHNG_FILM } from "../../redux/types/ManagingMoviesType";
import Movies_Flip from "../Movies_Flip";
import styleSlick from './styleSlick.module.css';


const MultipleRows = (props) => {
    const { watchingMovies, upcomingMovies } = useSelector(state => state.managingMoviesStore);
    const dispatch = useDispatch()
    let activeClassWatching = watchingMovies === true ? 'active_Film' : 'none_active_Film';
    let activeClassUpcoming = upcomingMovies === true ? 'active_Film' : 'none_active_Film';
    // WE RECEIVE FUNCTION TO RENDER A LIST MOVIES RIGHT HERE
    const renderListMovie = () => {
        return props.listMovies.map((item, index) => {
            return (<div className="mt-5">
                <Movies_Flip moviesItem={item} animateIndex={index} />
            </div>)
        })
    }

    // CUSTOMIZE LIBRAY
    const SampleNextArrow = (props) => {
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

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        console.log('multiple row');

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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 450.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            }
        ],

    };

    return (
        <div className='md:container carousel-card__item'>
            {/* BUTTON SET WATCHING*/}
            <button className={`watching-movies rounded-border ${styleSlick[activeClassWatching]} ml-14 mx-10`}
                onClick={() => {
                    let action = {
                        type: SET_WATCHNG_FILM
                    }
                    dispatch(action)
                }}
            >??ANG CHI???U</button>
            {/* BUTTON SET UPCOMING */}
            <button className={`upcoming-movies rounded-border ${styleSlick[activeClassUpcoming]}`}
                onClick={() => {
                    let action = {
                        type: SET_UPCOMING_FILM
                    }
                    dispatch(action)
                }}
            >PHIM S???P CHI???U</button>

            {/* SLIDDER CAROUSEL */}
            <Slider {...settings} >
                {renderListMovie()}
            </Slider>
        </div>
    );
}
export default MultipleRows;