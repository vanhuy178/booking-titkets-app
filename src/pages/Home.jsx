import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { capitalizationletter } from '../assets/constant';
import Movies from '../components/Movies';
import MultipleRows from '../components/r-slick/MulipleRows';
import { fetchMovies } from '../redux/actions/ManagingMovies';
import HomeMenu from '../template/home/HomeTemplate/HomeMenu';
import { fetchListCenimaSystem } from '../redux/actions/CenimaAction';
import HomeCarousel from '../template/home/HomeTemplate/HomeCarousel';

export default function Home(propsRoute) {
    // console.log(propsRoute);


    // CALL API
    const dispatch = useDispatch()
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


    const { listMovies } = useSelector(state => state.managingMoviesStore);

    // coding fixing footer
    const { listCenimaSystem } = useSelector(state => state.managingCenimaStore)
    console.log('from home-menu', listCenimaSystem);
    return (
        <>
            {/*we use  <MultipleRows /> */}
            <HomeCarousel />

            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
                    {/* WE USING REACT-SLICK HERE https://react-slick.neostack.com/*/}
                    <MultipleRows listMovies={listMovies} />
                </div>
            </section>


            <div className="mx-36" >
                <HomeMenu listCenimaSystem={listCenimaSystem} />
            </div>

        </>

    )
}
