import { ManagingBookingTicketsClass } from "../../models/ManagingBookingClass"
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES } from "../types/ManagingDetailShowtimeMovies"

const initialState = {
    detailCinemaShowtimes: new ManagingBookingTicketsClass()
}

export const ManagingBookingTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_MANAGING_SHOWTIME_MOVIES:
            return { ...state, detailCinemaShowtimes: action.payload }


        default:
            return { ...state }
    }
}