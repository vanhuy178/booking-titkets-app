import { history } from "../../App";
import { managingUser } from "../../services/ManagingUser";
import { TAKE_INFO_USER, USER_LOGIN_ACTION } from "../types/User";

export const postUserLogin = (data) => {
    return async (dispatch) => {
        try {
            const result = await managingUser.postInfoLogin(data)
            if (result.status === 200) {
                dispatch({
                    type: USER_LOGIN_ACTION,
                    payload: result.data.content
                })
                console.log('userContent', result.data.content);

                // IF LOGIN SUCCESS WELL WLL GO BACK TO PREV PAGES
                // REDIRECT TO PREV PAGE
                history.goBack()
            }
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}
export const fethInfoUser = () => {
    return async (dispatch) => {
        try {
            const result = await managingUser.takeInfouser()
            if (result.status === 200) {
                dispatch({
                    type: TAKE_INFO_USER,
                    payload: result.data.content
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}   