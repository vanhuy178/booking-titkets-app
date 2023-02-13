import { ManagingBookingTicketsClass } from "../../models/ManagingBookingClass"
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES, ORDER_CINEMA_CHAIR } from "../types/ManagingDetailShowtimeMovies"

const initialState = {
    detailCinemaShowtimes: new ManagingBookingTicketsClass(),
    listOrderCinemaChairs: []
}

// const t = {
//     daDat
//         :
//         false
// giaVe
//         :
//         90000
// loaiGhe
//         :
//         "Vip"
// maGhe
//         :
//         49862
// maRap
//         :
//         466
// stt
//         :
//         "62"
// taiKhoanNguoiDat
//         :
//         null
// tenGhe
//         :
//         "62"
// }
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

        default:
            return { ...state }
    }
}