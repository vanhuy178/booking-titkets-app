import { managingCenima } from "../../services/manageCinema";
import { GET_CINEMA } from "../types/CinemaType";


export const fetchListCenimaSystem = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            let result = await managingCenima.getListBannerCinema();
            if (result.status === 200) {
                dispatch({
                    type: GET_CINEMA,
                    payload: result.data.content
                })
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }
}
