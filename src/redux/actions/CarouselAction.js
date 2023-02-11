import { GET_CAROUSEL } from '../types/CarouselTypes';
import { managingMovieService } from '../../services/manageMovieServices';
import axios from 'axios';
import { DOMAIN } from '../../utils/settings/config';

export const fetchCarousel = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            let result = await managingMovieService.getListBanner();
            dispatch({
                type: GET_CAROUSEL,
                payload: result.data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}

// export const fetchCarousel = () => {

//     return async (dispatch) => {
//         try {
//             let result = await axios(
//                 {
//                     url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
//                     method: 'GET'
//                 }
//             )
//             dispatch({
//                 type: GET_CAROUSEL,
//                 payload: result.data.content
//             })

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }