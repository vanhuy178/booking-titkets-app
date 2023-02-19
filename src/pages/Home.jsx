import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../components/r-slick/MulipleRows';
import { fetchMovies } from '../redux/actions/ManagingMovies';
import HomeMenu from '../template/home/HomeTemplate/HomeMenu';
import { fetchListCenimaSystem } from '../redux/actions/CenimaAction';
import HomeCarousel from '../template/home/HomeTemplate/HomeCarousel';
import { NavLink } from 'react-router-dom';
import './StylePage/home.scss'
import { mainBackgroundColor } from '../assets/constant';
import TitleHeader from '../components/TitleHeader';
export default function Home(propsRoute) {
    const { listMovies } = useSelector(state => state.managingMoviesStore);
    const { listCenimaSystem } = useSelector(state => state.managingCenimaStore)
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




    const renderHotMovies = () => {
        return listMovies.map((itemHotMovies, indexHotMovies) => {
            const { hot, moTa, tenPhim, hinhAnh } = itemHotMovies
            if (hot === true) {
                return (
                    <div className="card mb-2 relative bg-pink-300" style={{ width: '18rem' }} key={indexHotMovies}>
                        <img src={hinhAnh} className="card-img-top" alt={tenPhim} />
                        <div className="card-body px-1">
                            <h5 className="card-title uppercase text-red-500 font-bold text-2xl">{tenPhim}</h5>
                            <p className="card-text mb-10">{moTa.length > 50 ? moTa.slice(0, 50) + "..." : moTa}</p>
                            <NavLink to="#" className="btn btn-primary inline-block absolute bottom-2 left-20 px-10">Đặt vé</NavLink>
                        </div>
                    </div>


                )
            }
        })


    }
    return (
        <div className={mainBackgroundColor}>
            {/*WE USE <MultipleRows /> */}
            <HomeCarousel />

            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
                    {/* WE USING REACT-SLICK HERE https://react-slick.neostack.com/*/}
                    <MultipleRows listMovies={listMovies} />
                </div>
            </section>

            {/* HOME MENU */}
            <div className="mx-36" >
                <HomeMenu listCenimaSystem={listCenimaSystem} />
            </div>

            {/* LIST HOT MOVIES */}
            <div className="hot-movies container">
                <TitleHeader titleHeader='Danh sách phim hot' />

                <div className="hot-movies-list grid grid-cols-4">
                    {renderHotMovies()}
                </div>
            </div>

        </div>

    )
}
