import { managingMovieService } from '../../services/manageMovieServices';
import { ORDER_CINEMA_CHAIR } from '../types/ManagingDetailShowtimeMovies';
import { GET_DETAIL_MOVIE, GET_INFO_SPECIFIC_MOVIES, GET_MOVIES } from '../types/ManagingMoviesType';
import { history } from '../../App';
import { hideLoadingAction, showLoadingAction } from './LoadingAction';
export const fetchMovies = (moviesName = '') => {
    return async (dispatch) => {
        try {
            /*
            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER
             */

            let result = await managingMovieService.getListMovies(moviesName);
            console.log({ result });
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
            dispatch(showLoadingAction)

            let result = await managingMovieService.getListMoviesShowTimesInfo(idMovies);
            dispatch({
                type: GET_DETAIL_MOVIE,
                payload: result.data.content
            })
            await dispatch(hideLoadingAction)

        } catch (error) {
            await dispatch(hideLoadingAction)

            console.log(error);
        }
    }
}


export const orderCinemaChair = (chair, idShowtimes) => {
    return async (dispatch, getState) => { // getState IS A FUNCTION OF REDUX-THUNK SUPPORT TO TAKE STATE IN REDUCER

        try {
            await dispatch(showLoadingAction)
            // DISPATH FUNCTION TO REDUCER
            dispatch({
                type: ORDER_CINEMA_CHAIR,
                payload: chair
            })
            await dispatch(hideLoadingAction)
        } catch (error) {
            console.log(error.response.content);
        }


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
export const uploadingFormData = (formData) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)

            let result = await managingMovieService.uploadTheMovie(formData);
            console.log(result.data.content);
            if (result.status === 200) {
                alert('thêm thành công')
            }
            await dispatch(hideLoadingAction)

        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.content);
        }
    }
}

export const getInfoMovies = (idMovies) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)

            let result = await managingMovieService.getInfoMoviesToEditMovies(idMovies);
            console.log(result);
            if (result.status === 200) {
                dispatch({ type: GET_INFO_SPECIFIC_MOVIES, payload: result.data.content })
            }
            await dispatch(hideLoadingAction)

        } catch (error) {
            await dispatch(hideLoadingAction)

            console.log(error);
        }
    }
}
export const updatedInfoMoviesAction = (updatedValue) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)

            let result = await managingMovieService.updatedInfoMovies(updatedValue);
            if (result.status === 200) {
                dispatch(fetchMovies());
                // 403 Forbidden

                // The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize it.
                // console.log(result);
                return history.goBack()
            }
            await dispatch(hideLoadingAction)

        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.data);
        }
    }
}

export const deleteMoviesAcition = (idMoves) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            await managingMovieService.deleteMovies(idMoves);
            dispatch(fetchMovies())
            await dispatch(hideLoadingAction)
        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.data)
        }
    }
}
