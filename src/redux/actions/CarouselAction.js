import { GET_CAROUSEL } from '../types/CarouselTypes';
import { managingMovieService } from '../../services/manageMovieServices';
import { hideLoadingAction, showLoadingAction } from './LoadingAction';

export const fetchCarousel = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            await dispatch(showLoadingAction)

            let result = await managingMovieService.getListBanner();
            dispatch({
                type: GET_CAROUSEL,
                payload: result.data.content
            })
            await dispatch(hideLoadingAction)

        } catch (error) {
            console.log(error);
        }
    }
}

