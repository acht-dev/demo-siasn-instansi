import {
GET_REF_GOLONGAN_ERROR,
GET_REF_GOLONGAN_SUCCESS,
GET_REF_GOLONGAN_PENDING
} from "../../types"

import axios from "axios"
import Cookies from "js-cookie"

const token = Cookies.get('token');

export const refGolongan = () => async dispatch =>{
  try{
    dispatch({ type: GET_REF_GOLONGAN_PENDING })
    const res = await axios.get('http://202.125.94.151:9595/api/golongan/search',{
      headers:{
        Authorization: token
      }
    })
    dispatch({
      type: GET_REF_GOLONGAN_SUCCESS,
      payload: res.data
    })
  }catch(err){
    dispatch({
      type: GET_REF_GOLONGAN_ERROR,
      payload: err
    })
  }
}