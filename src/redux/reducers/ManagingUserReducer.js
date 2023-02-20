import { UserLoginClass } from "../../models/LoginClass"
import { ManagingUserClass } from "../../models/ManagingUserClass"
import { TOKEN, USER_LOGIN } from "../../utils/settings/config"
import { LOGIN_DEPEAT, LOGIN_SUCESSFULLY, REGISTER_DEPEAT, REGISTER_SUCESSFULLY, TAKE_INFO_USER, USER_LOGIN_ACTION } from "../types/User"


let user = new UserLoginClass()
if (!localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: user,
    managingInfoUser: new ManagingUserClass(),
    messageUserLogin: '',
    messageUserRegister: ''
}

export const managingUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_ACTION: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
            localStorage.setItem(TOKEN, action.payload.accessToken)
            return { ...state, userLogin: action.payload }
        }
        case TAKE_INFO_USER: {
            return { ...state, managingInfoUser: action.payload }
        }
        case LOGIN_SUCESSFULLY: {
            return { ...state, messageUserLogin: action.payload }
        }
        case LOGIN_DEPEAT: {
            return { ...state, messageUserLogin: action.payload }
        }
        case REGISTER_SUCESSFULLY: {
            return { ...state, messageUserRegister: action.payload }
        }
        case REGISTER_DEPEAT: {
            return { ...state, messageUserRegister: action.payload }
        }
        default:
            return { ...state }
    }
}