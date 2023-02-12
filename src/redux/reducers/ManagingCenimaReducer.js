import { GET_CINEMA } from "../types/CinemaType"

const initialState = {
    listCenimaSystem: []
}

export const manageCenimaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CINEMA: {
            return { ...state, listCenimaSystem: action.payload }
        }
        default:
            return { ...state }
    }
}