import {GET_NAME_ERROR, GET_NAME_PENDING, GET_NAME_SUCCESS} from "../types"
import {API} from "../../configs"

export const getNameAsn = (id) => async dispatch => {
  try{
    dispatch({ type: GET_NAME_PENDING})
    const res = await API.searchNameAsn(id)
    dispatch({
      type: GET_NAME_SUCCESS,
      payload: res.data.Value[0]
    })
  }catch(err){
    dispatch({
      type: GET_NAME_ERROR,
      payload: err
    })
  }
}