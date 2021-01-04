import Axios from "axios"
import * as types from "../types"

export const fetchPost = () => async dispatch=>{
    // const res = await axios.
    dispatch({
        type: types.GET_DATA,
        payload:['1st post', '2st post', '3st post']
    })
}