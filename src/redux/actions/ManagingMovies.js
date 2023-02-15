import { connection } from '../..';
import { managingMovieService } from '../../services/manageMovieServices';
import { ORDER_CINEMA_CHAIR } from '../types/ManagingDetailShowtimeMovies';
import { GET_DETAIL_MOVIE, GET_MOVIES } from '../types/ManagingMoviesType';
export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            let result = await managingMovieService.getListMovies();
            dispatch({
                type: GET_MOVIES,
                payload: result.data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchDetailShowTimesMovies = (idMovies) => {
    return async (dispatch) => {
        try {
            /*
            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER
             */
            let result = await managingMovieService.getListMoviesShowTimesInfo(idMovies);
            dispatch({
                type: GET_DETAIL_MOVIE,
                payload: result.data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const orderCinemaChair = (chair, idShowtimes) => {
    return async (dispatch, getState) => { // getState IS A FUNCTION OF REDUX-THUNK SUPPORT TO TAKE STATE IN REDUCER

        // DISPATH FUNCTION TO REDUCER
        dispatch({
            type: ORDER_CINEMA_CHAIR,
            payload: chair
        })
        // SET NECESSARY VALUE FOR CALL API
        // let listOrderingCinemaChairs = getState().managingBookingTicketsStore.listOrderingCinemaChairs
        // let userName = getState().managingUserStore.userLogin.taiKhoan;
        // let listOrderingCinemaChairsStringify = JSON.stringify(listOrderingCinemaChairs)
        // //CHECK VALUES BEFORE CALL API
        // console.log(idShowtimes);
        // console.log(listOrderingCinemaChairsStringify);
        // // CALL API TO SIGNALR
        // connection.invoke('datGhe', userName, listOrderingCinemaChairsStringify, idShowtimes)
    }
}