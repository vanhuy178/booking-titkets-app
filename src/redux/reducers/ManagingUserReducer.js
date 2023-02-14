import { UserLoginClass } from "../../models/LoginClass"
import { ManagingUserClass } from "../../models/ManagingUserClass"
import { TOKEN, USER_LOGIN } from "../../utils/settings/config"
import { TAKE_INFO_USER, USER_LOGIN_ACTION } from "../types/User"


let user = new UserLoginClass()
if (!localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: user,
    managingInfoUser: new ManagingUserClass()
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
        default:
            return { ...state }
    }
}