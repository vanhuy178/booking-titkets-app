import { GET_MOVIES } from "../types/ManagingMoviesType";

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
    ]
}

export const ManagingMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {

            return { ...state, listMovies: action.payload }
        }

        default:
            return { ...state };
    }
}