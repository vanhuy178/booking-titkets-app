import { UserLoginClass } from "../../models/LoginClass"
import { TOKEN, USER_LOGIN } from "../../utils/settings/config"
import { USER_LOGIN_ACTION } from "../types/User"


let user = {}
if (!localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
user = new UserLoginClass()
const initialState = {
    userLogin: user
}

export const managingUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_ACTION: {
            console.log('userLogin', action.payload);
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
            localStorage.setItem(TOKEN, action.payload.accessToken)
            return { ...state, userLogin: action.payload }
        }

        default:
            return { ...state }
    }
}