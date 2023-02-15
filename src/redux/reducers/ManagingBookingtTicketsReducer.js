import { ManagingBookingTicketsClass } from "../../models/ManagingBookingClass"
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES, ORDER_CINEMA_CHAIR } from "../types/ManagingDetailShowtimeMovies"
import { CHANGE_TAB_ACTIVE, COMPLETED_BOOKING, ORDER_CHAIR_REAL_TIME, REDIRECT_TABS } from "../types/ManagingMoviesType"

const initialState = {
    detailCinemaShowtimes: new ManagingBookingTicketsClass(),
    listOrderingCinemaChairs: [],
    listChairIsOrderingByCustomer: [{ maGhe: 49153 }, { maGhe: 49151 }, { maGhe: 49150 }],
    tabActive: '1',
}

export const ManagingBookingTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_MANAGING_SHOWTIME_MOVIES:
            return { ...state, detailCinemaShowtimes: action.payload }

        case ORDER_CINEMA_CHAIR:
            // UPDATE CHAIR WHEN PEOPLE CLICK FIRT TIME WE WILL ADD CHAIR BUT IN THE SECOND TIME WE CLICK ITSEFL IT WILL BE REMOVE

            // CREATE DEEP COPY listOrderingCinemaChairs

            // IF FIND SECCESS THE INDEX WILL RETURN INDEX ELSE RETURN -1
            let updatedListOrderingCinemaChairs = state.listOrderingCinemaChairs
            let index = updatedListOrderingCinemaChairs.findIndex(itemOrderCinemaCharis => itemOrderCinemaCharis.maGhe === action.payload.maGhe)
            if (index !== -1) {
                updatedListOrderingCinemaChairs.splice(index, 1)
            }
            else {
                updatedListOrderingCinemaChairs.push(action.payload)
            }
            return { ...state, listOrderingCinemaChairs: updatedListOrderingCinemaChairs }

        case COMPLETED_BOOKING: {
            return { ...state, listOrderingCinemaChairs: [] }
        }

        case REDIRECT_TABS: {
            return { ...state, tabActive: '2' }
        }
        case CHANGE_TAB_ACTIVE: {
            return { ...state, tabActive: action.payload }
        }
        case "ORDER_CHAIR_REAL_TIME": {
            console.log('from managing booking', action.payload);
            return { ...state, listChairIsOrderingByCustomer: action.payload }
        }
        default:
            return { ...state }
    }
}   