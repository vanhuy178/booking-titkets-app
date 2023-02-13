import { managingBookingTickets } from "../../services/managingBookingTickets";
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES } from "../types/ManagingDetailShowtimeMovies";

export const fetchManagingBookingTickets = (idShowtimes) => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            let result = await managingBookingTickets.getBookingTickets(idShowtimes);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_MANAGING_SHOWTIME_MOVIES,
                    payload: result.data.content
                })

            }


        } catch (error) {
            console.log(error.response.data);
        }
    }
}