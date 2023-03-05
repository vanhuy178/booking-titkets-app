import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../components/r-slick/MulipleRows';
import { fetchMovies } from '../redux/actions/ManagingMovies';
import HomeMenu from '../template/home/HomeTemplate/HomeMenu';
import { fetchListCenimaSystem } from '../redux/actions/CenimaAction';
import HomeCarousel from '../template/home/HomeTemplate/HomeCarousel';
import { Section } from '../components/Section';
import CollapseCinema from '../components/CollapseCinema';
import Adv from '../components/Adv';
import Partner from '../components/Partner';
import useIsMobile from '../components/useMobile';
export default function Home(propsRoute) {
    const { listMovies } = useSelector(state => state.managingMoviesStore);
    const { listCenimaSystem } = useSelector(state => state.managingCenimaStore);
    const dispatch = useDispatch();
    const isMobile = useIsMobile();
    function responsiveHomeMenu() {
        if (isMobile) {
            return <CollapseCinema listCenimaSystem={listCenimaSystem} />
        }
        else {
            return <HomeMenu listCenimaSystem={listCenimaSystem} />
        }

    }
    useEffect(
        () => {
            document.title = 'Home - Cenima App';
            // DISPATCH ACTION WITH REDUX THUNK
            const action = fetchMovies()
            // CAN DISPATCH A FUNCTION WITH A SUPPORT OF REDUX - THUNK
            // Because we was setting redux thunk , so we can pass into dispatch with a function
            // dispatch(action)---> action ---> fetchCarousel() --> dispatch an action object to reducer
            dispatch(action)
            dispatch(fetchListCenimaSystem());

        }, [])

    return (
        <div className='main-bg-color'>
            {/*WE USE <MultipleRows /> */}
            <HomeCarousel />

            {/* CAROUSEL CARD */}
            {/* class="wow slideInLeft"*/}
            <Section className='carousel wow animate__fadeInLeft'>
                <section className="text-gray-600 body-font carousel-card" >
                    <div className="container px-0 md:px-5 mx-auto" style={{ maxHeight: '1000px' }}>
                        {/* WE USING REACT-SLICK HERE https://react-slick.neostack.com/*/}
                        {<MultipleRows listMovies={listMovies} />}
                    </div>
                </section>
            </Section>
            {/* THE TARGET OF WEEKENDS */}

            {/* HOME MENU */}
            {responsiveHomeMenu()}

            {/* PARNERT */}
            <Partner listCenimaSystem={listCenimaSystem} />

            {/* POPUP ADV */}
            <Adv />
        </div>

    )
}
