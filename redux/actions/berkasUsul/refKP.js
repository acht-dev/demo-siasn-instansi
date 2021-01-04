import {
  GET_REF_KP_ERROR,
  GET_REF_KP_PENDING,
  GET_REF_KP_SUCCESS
  } from "../../types"
  
  import axios from "axios"
  import Cookies from "js-cookie"
  
  const token = Cookies.get('token');
  
  export const refKP = () => async dispatch =>{
    try{
      dispatch({ type: GET_REF_KP_PENDING })
      const res = await axios.get('https://cors-anywhere.herokuapp.com/http://202.125.94.151:9595/api/jenis-kp',{
        headers:{
          Authorization: token
        }
      })
      dispatch({
        type: GET_REF_KP_SUCCESS,
        payload: res.data
      })
    }catch(err){
      dispatch({
        type: GET_REF_KP_ERROR,
        payload: err
      })
    }
  }