import { BookingTicketClass } from "../../models/BookingTicketsClass";
import { managingBookingTickets } from "../../services/managingBookingTickets";
import { GET_DETAIL_MANAGING_SHOWTIME_MOVIES } from "../types/ManagingDetailShowtimeMovies";
import { COMPLETED_BOOKING, REDIRECT_TABS } from "../types/ManagingMoviesType";
import { hideLoadingAction, showLoadingAction } from "./LoadingAction";

export const fetchManagingBookingTickets = (idShowtimes) => {
    return async (dispatch) => {
        try {
            /*
            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER
             */
            await dispatch(showLoadingAction)
            let result = await managingBookingTickets.getBookingTickets(idShowtimes);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_MANAGING_SHOWTIME_MOVIES,
                    payload: result.data.content
                })
                await dispatch(hideLoadingAction)
            }

        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.data.content);
        }
    }
}

export const postBookingTickets = (infoBookingTicket = new BookingTicketClass()) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            let result = await managingBookingTickets.bookTickets(infoBookingTicket);
            console.log(result.data.content);
            await dispatch(fetchManagingBookingTickets(infoBookingTicket.maLichChieu));
            await dispatch({ type: COMPLETED_BOOKING })
            await dispatch(hideLoadingAction);
            await dispatch({ type: REDIRECT_TABS })
        }

        catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.data.content)
        }
    }
}