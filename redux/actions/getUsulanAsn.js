import {GET_LIST_USULAN_ERROR, GET_LIST_USULAN_PENDING, GET_LIST_USULAN_SUCCESS} from "../types"
import {API} from "../../configs"

export const getUsulanAsn = () => async dispatch => {
  try{
    dispatch({ type: GET_LIST_USULAN_PENDING})
    const res = await API.searchUsulanAsn()
    dispatch({
      type: GET_LIST_USULAN_SUCCESS,
      payload: res.data
    })
  }catch(err){
    dispatch({
      type: GET_LIST_USULAN_ERROR,
      payload: err
    })
  }
}