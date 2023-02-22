import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../components/r-slick/MulipleRows';
import { fetchMovies } from '../redux/actions/ManagingMovies';
import HomeMenu from '../template/home/HomeTemplate/HomeMenu';
import { fetchListCenimaSystem } from '../redux/actions/CenimaAction';
import HomeCarousel from '../template/home/HomeTemplate/HomeCarousel';
import './StylePage/home.scss'
import { mainBackgroundColor } from '../assets/constant';
import { Section } from '../components/Section';
import CollapseCinema from '../components/CollapseCinema';

export default function Home(propsRoute) {
    const { listMovies } = useSelector(state => state.managingMoviesStore);
    const { listCenimaSystem } = useSelector(state => state.managingCenimaStore);
    const dispatch = useDispatch();

    useEffect(
        () => {
            // DISPATCH ACTION WITH REDUX THUNK
            const action = fetchMovies()
            // CAN DISPATCH A FUNCTION WITH A SUPPORT OF REDUX - THUNK
            // Because we was setting redux thunk , so we can pass into dispatch with a function
            // dispatch(action)---> action ---> fetchCarousel() --> dispatch an action object to reducer
            dispatch(action)
            dispatch(fetchListCenimaSystem())
        }, [])

    return (
        <div className={`${mainBackgroundColor}`}>
            {/*WE USE <MultipleRows /> */}
            <HomeCarousel />


            {/* CAROUSEL CARD */}
            {/* class="wow slideInLeft"*/}
            <Section className=''>
                <section className="text-gray-600 body-font carousel-card animate__animated  animate__backInUp animate__delay-2s" >
                    <div className="container px-0 md:px-5 mx-auto" style={{ maxHeight: '1000px' }}>
                        {/* WE USING REACT-SLICK HERE https://react-slick.neostack.com/*/}
                        {
                            <MultipleRows listMovies={listMovies} />
                        }
                    </div>
                </section>
            </Section>

            {/* HOME MENU */}
            <HomeMenu listCenimaSystem={listCenimaSystem} />
            <CollapseCinema listCenimaSystem={listCenimaSystem} />
        </div>

    )
}
