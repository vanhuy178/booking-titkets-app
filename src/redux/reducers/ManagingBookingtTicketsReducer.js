import { ManagingBookingTicketsClass } from "../../models/ManagingBookingClass"
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES, ORDER_CINEMA_CHAIR } from "../types/ManagingDetailShowtimeMovies"
import { COMPLETED_BOOKING, REDIRECT_TABS } from "../types/ManagingMoviesType"

const initialState = {
    detailCinemaShowtimes: new ManagingBookingTicketsClass(),
    listOrderCinemaChairs: [],
    listChairIsOrderingByCustomer: [{ maGhe: 49153 }, { maGhe: 49151 }, { maGhe: 49150 }],
    tabActive: '1',
}

export const ManagingBookingTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_MANAGING_SHOWTIME_MOVIES:
            return { ...state, detailCinemaShowtimes: action.payload }

        case ORDER_CINEMA_CHAIR:
            // UPDATE CHAIR WHEN PEOPLE CLICK FIRT TIME WE WILL ADD CHAIR BUT IN THE SECOND TIME WE CLICK ITSEFL IT WILL BE REMOVE

            // CREATE DEEP COPY LISTORDERCINEMACHAIRS

            // IF FIND SECCESS THE INDEX WILL RETURN INDEX ELSE RETURN -1
            let updatedListOrderCinemaChairs = state.listOrderCinemaChairs
            let index = updatedListOrderCinemaChairs.findIndex(itemOrderCinemaCharis => itemOrderCinemaCharis.maGhe === action.payload.maGhe)
            if (index !== -1) {
                updatedListOrderCinemaChairs.splice(index, 1)
            }
            else {
                updatedListOrderCinemaChairs.push(action.payload)
            }
            return { ...state, listOrderCinemaChairs: updatedListOrderCinemaChairs }

        case COMPLETED_BOOKING: {
            return { ...state, listOrderCinemaChairs: [] }
        }

        case REDIRECT_TABS: {
            return { ...state, tabActive: '2' }
        }
        case "CHANGE_TAB_ACTIVE": {
            return { ...state, tabActive: action.payload }
        }
        default:
            return { ...state }
    }
}