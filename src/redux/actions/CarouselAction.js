import axios from 'axios';
import { DOMAIN } from '../../utils/settings/config';
import { GET_CAROUSEL } from '../types/CarouselTypes';
export const fetchCarousel = () => {

    return async (dispatch) => {
        try {
            let result = await axios(
                {
                    url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
                    method: 'GET'
                }
            )
            dispatch({
                type: GET_CAROUSEL,
                payload: result.data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}