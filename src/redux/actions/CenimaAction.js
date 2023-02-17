import { managingCenima } from "../../services/manageCinema";
import { GET_CINEMA } from "../types/CinemaType";
import { hideLoadingAction, showLoadingAction } from "./LoadingAction";


export const fetchListCenimaSystem = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            await dispatch(showLoadingAction)

            let result = await managingCenima.getListBannerCinema();
            if (result.status === 200) {
                dispatch({
                    type: GET_CINEMA,
                    payload: result.data.content
                })
            }
            dispatch(hideLoadingAction)
        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error);
        }
    }
}
