import axios from "axios"
export const RESIZE_IMAGE = "RESIZE_IMAGE"
export const CLEAR_RESPONSE = "CLEAR_RESPONSE"


export function resizeImage(img) {
    return async function (dispatch) {
        try {
            console.log(img)
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${img.token}`
                }
            }
            // "https://ond58j9gt9.execute-api.sa-east-1.amazonaws.com/dev/validate"
            const res = await axios.post("https://ond58j9gt9.execute-api.sa-east-1.amazonaws.com/dev/validate",img.input,config);
            return dispatch({
                type: RESIZE_IMAGE,
                payload: res.data
            })

        } catch (e) {
            return dispatch({
                type: RESIZE_IMAGE,
                payload: { ok: false, msg: "Error" }
            })
        }
    }
}
export function clearResponse() {
    return function (dispatch) {
        return dispatch({
            type: CLEAR_RESPONSE,
            payload: ""
        })
    }
}