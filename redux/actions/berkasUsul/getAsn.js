import {
  GET_ASN_ERROR,
  GET_ASN_PENDING,
  GET_ASN_SUCCESS
}
from "../../types"
import {API} from "../../../configs"

export const getAsn = (nipLama, nipBaru) => async dispatch => {
  try{
    dispatch({type: GET_ASN_PENDING})
    const res = await API.searchNip(nipLama, nipBaru)

    dispatch({
      type: GET_ASN_SUCCESS,
      payload: res.data.Value[0]
    })
  }catch(err){
    dispatch({type: GET_ASN_ERROR, payload: err})
  }
}