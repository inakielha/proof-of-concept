import { CLEAR_RESPONSE, RESIZE_IMAGE } from "./action"


const initialState = {
    response: ""
}





export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case RESIZE_IMAGE:
            return {
                ...state,
                response: action.payload
            }
        case CLEAR_RESPONSE:
            return {
                ...state,
                response: ""
            }
    }
}