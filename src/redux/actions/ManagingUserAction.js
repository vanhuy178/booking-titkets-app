import { history } from "../../App";
import { managingUser } from "../../services/ManagingUser";
import { GET_DATA_USERS, LOGIN_DEPEAT, LOGIN_SUCESSFULLY, MESSAGE_DELETE, REGISTER_DEPEAT, REGISTER_SUCESSFULLY, TAKE_INFO_USER, USER_LOGIN_ACTION } from "../types/User";
import { hideLoadingAction, showLoadingAction } from "./LoadingAction";


export const getDataUserAction = (name) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction);
            const result = await managingUser.fetchDataUser(name);
            if (result.status === 200) {
                await dispatch({ type: GET_DATA_USERS, payload: result.data.content })

                console.log(GET_DATA_USERS, result);
            }
            await dispatch(hideLoadingAction);
        } catch (error) {
            await dispatch(hideLoadingAction);
            console.log(error);
        }
    }
}



export const postUserLogin = (data) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            const result = await managingUser.postInfoLogin(data)
            if (result.status === 200) {
                await dispatch({
                    type: USER_LOGIN_ACTION,
                    payload: result.data.content
                })

                await dispatch({ type: LOGIN_SUCESSFULLY, payload: result.data.message })
                console.log('userContent', result.data.message);

                // IF LOGIN SUCCESS WELL WLL GO BACK TO PREV PAGES
                // REDIRECT TO PREV PAGE
                await setTimeout(() => history.goBack(), 1000)

                // history.goBack()
            }
            await dispatch(hideLoadingAction)
            // console.log(result);
        } catch (error) {
            await dispatch(hideLoadingAction)
            await dispatch({ type: LOGIN_DEPEAT, payload: error.response.data.content })
            console.log(error.response.data.content);
        }
    }
}
// POST USER TO SERVER IN ADMIN/ADD_USER
export const addUserInfo = (data) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            const result = await managingUser.postUserInfo(data)
            if (result.status === 200) {
                await dispatch({ type: REGISTER_SUCESSFULLY, payload: result.data.message })
                console.log('userContent', result.data.message);

                // REDIRECT TO PREV PAGE
                // await setTimeout(() => history.goBack(), 1000)
                // history.goBack()
            }
            await dispatch(hideLoadingAction)
            // console.log(result);
        } catch (error) {
            await dispatch(hideLoadingAction)
            await dispatch({ type: REGISTER_DEPEAT, payload: error.response.data.content })
            console.log(error);
            console.log(error.response.data.content);
        }
    }
}

// FETCH USER FROM API
export const fethInfoUser = () => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            const result = await managingUser.takeInfouser()
            if (result.status === 200) {
                dispatch({
                    type: TAKE_INFO_USER,
                    payload: result.data.content
                })
            }
            await dispatch(hideLoadingAction)

        } catch (error) {
            await dispatch(hideLoadingAction)
            console.log(error.response.data.content);
        }
    }
}


export const registerUserAction = (registerValue) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            let result = await managingUser.postInfoRegister(registerValue);
            if (result.status === 200) {
                console.log(result.data.content);
                await dispatch({ type: REGISTER_SUCESSFULLY, payload: result.data.message })
                await setTimeout(() => history.goBack(), 1000)

            }
            await dispatch(hideLoadingAction)

        }
        catch (error) {
            await dispatch(hideLoadingAction);
            await dispatch({ type: REGISTER_DEPEAT, payload: error.response.data.content })
            console.log(error.response.data.content);
        }
    }
}

export const deleteUserAction = (userName) => {
    return async (dispatch) => {
        try {
            await dispatch(showLoadingAction)
            let result = await managingUser.deleteUser(userName);
            if (result.status === 200) {
                dispatch(getDataUserAction())
                console.log(result);
                await dispatch({ type: MESSAGE_DELETE, payload: result.data.message })
            }
            await dispatch(hideLoadingAction)
        } catch (error) {
            await dispatch(hideLoadingAction)
            await dispatch({ type: MESSAGE_DELETE, payload: error.response.data.content })
            console.log(error.response.data.content);
        }
    }
}