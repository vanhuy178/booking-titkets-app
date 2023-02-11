import { GET_CAROUSEL } from "../types/CarouselTypes"

const initialState = {
    listCarouselBanner: [{
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"

    }]
}
export const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAROUSEL:
            return { ...state, listCarouselBanner: action.payload }

        default: return { ...state }
    }
}   