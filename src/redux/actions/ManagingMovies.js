import axios from 'axios';
import { managingMovieService } from '../../services/manageMovieServices';
import { DOMAIN } from '../../utils/settings/config';
import { GET_MOVIES } from '../types/ManagingMoviesType';
export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            /*

            WE CONNECT TO BACK-END VIA CLASS IN SERVICE FOLFER

             */
            let result = await managingMovieService.getListMovies();
            dispatch({
                type: GET_MOVIES,
                payload: result.data.content
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}

// export const fetchMovies = () => {

//     return async (dispatch) => {
//         try {
//             let result = await axios(
//                 {
//                     url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
//                     method: 'GET'
//                 }
//             )
//             dispatch({
//                 type: GET_MOVIES,
//                 payload: result.data.content
//             })

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
