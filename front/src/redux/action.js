import axios from "axios"
export const RESIZE_IMAGE = "RESIZE_IMAGE"
export const CLEAR_RESPONSE = "CLEAR_RESPONSE"


export function resizeImage(img){
    return async function(dispatch){
        try{
            const res = await axios.post("http://localhost:4000/validate/",img);
            console.log(res.data)
            return dispatch({
                type: RESIZE_IMAGE,
                payload: res.data
            })

        }catch(e){
            console.log(e)
            return dispatch({
                type: RESIZE_IMAGE,
                payload: {ok:false, msg: "Error"}
            })
        }
    }
}
export function clearResponse(){
    return function (dispatch){
        return dispatch({
            type: CLEAR_RESPONSE,
            payload: ""
        })
    }
}