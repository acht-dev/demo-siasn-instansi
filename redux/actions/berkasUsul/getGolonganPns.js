import {
GET_GOLONGAN_PNS_ERROR,
GET_GOLONGAN_PNS_PENDING,
GET_GOLONGAN_PNS_SUCCESS
} from "../../types"

import {API} from "../../../configs"

export const getGolonganPns = (id) => async dispatch =>{
  try{
    dispatch({ type: GET_GOLONGAN_PNS_PENDING })
    const res = await API.getGolongan(id);
    dispatch({
      type: GET_GOLONGAN_PNS_SUCCESS,
      payload: res.data
    })
  }catch(err){
    dispatch({
      type: GET_GOLONGAN_PNS_ERROR,
      payload: err
    })
  }
}
