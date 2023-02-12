import { GET_DETAIL_MOVIE, GET_MOVIES, SET_UPCOMING_FILM, SET_WATCHNG_FILM } from "../types/ManagingMoviesType";

const initialState = {
    listMovies: [
        {
            "maPhim": 10867,
            "tenPhim": "Tầm Tần Ký 65",
            "biDanh": "tam-tan-ky-65",
            "trailer": "https://www.youtube.com/watch?v=w1ar36-xnBc",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/tam-tan-ky-65_gp01.jpg",
            "moTa": "xuyên không thời gian ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2023-01-16T16:20:33.36",
            "danhGia": 4,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    upcomingMovies: true,
    watchingMovies: true,
    // CREATE AN ARRAY TO BACKUP MAIN ARRAY, IT WILL RECEIVED FULL ARRAY FROM API
    defaultListMovies: [],

    // This is a object
    detailMoviesShowTimesInfo: {}
}

export const ManagingMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {

            let allMovies = action.payload
            return { ...state, listMovies: allMovies, defaultListMovies: allMovies }
        }

        // CHECK ONE TWO CONDITION HERE
        case SET_WATCHNG_FILM: {
            state.watchingMovies = !state.watchingMovies;
            let watchingMoviesList = state.defaultListMovies.filter(movie => movie.dangChieu === state.watchingMovies)
            return { ...state, listMovies: watchingMoviesList }

        }
        case SET_UPCOMING_FILM: {
            state.upcomingMovies = !state.upcomingMovies;
            let upcomingMoviesList = state.defaultListMovies.filter(movie => movie.sapChieu === state.upcomingMovies)
            return { ...state, listMovies: upcomingMoviesList }
        }


        // Coding....
        case GET_DETAIL_MOVIE: {
            return { ...state, detailMoviesShowTimesInfo: action.payload }
        }
        default:
            return { ...state };
    }
}