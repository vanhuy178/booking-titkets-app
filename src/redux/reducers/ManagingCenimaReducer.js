import { ADD_SHOWTIME_CINEMA_DEPEAT, ADD_SHOWTIME_CINEMA_SUCCESSFULLY, GET_CINEMA } from "../types/CinemaType"

const initialState = {
    listCenimaSystem: [],
    messageCenimaStatus: ''
}

export const manageCenimaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CINEMA: {
            return { ...state, listCenimaSystem: action.payload }
        }

        case ADD_SHOWTIME_CINEMA_SUCCESSFULLY: {
            return { ...state, messageCenimaStatus: action.payload }
        }
        case ADD_SHOWTIME_CINEMA_DEPEAT: {
            return { ...state, messageCenimaStatus: action.payload }
        }
        default:
            return { ...state }
    }
}