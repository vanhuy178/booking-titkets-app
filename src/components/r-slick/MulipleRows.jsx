import React, { Component } from "react";
import Slider from "react-slick";
import Movies from "../Movies";
import styleSlick from './styleSlick.module.css';

export default class MultipleRows extends Component {


    // WE RECEIVE FUNCTION TO RENDER A LIST MOVIES RIGHT HERE
    renderListMovie = () => {
        return this.props.listMovies.map((item, index) => {

            return (<div className={`${styleSlick['width-item']}`}>
                <Movies moviesItem={item} />
            </div>)
        })
    }

    render() {

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
            centerPadding: "5px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };

        return (
            <div className="container">
                <h2>Multiple Rows</h2>
                <Slider {...settings}>
                    {this.renderListMovie()}
                    {this.renderListMovie()}
                    {this.renderListMovie()}
                    {this.renderListMovie()}
                </Slider>
            </div>
        );
    }
}