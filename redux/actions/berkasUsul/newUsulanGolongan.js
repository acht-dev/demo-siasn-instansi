import {
POST_USULAN_NEW_ERROR,
POST_USULAN_NEW_PENDING,
POST_USULAN_NEW_SUCCESS
} from "../../types"

import axios from "axios";
import Cookies from "js-cookie"
import {toast} from "react-toastify"

const token = Cookies.get('token');

export const newUsulanGolongan = (dataUsul) => async dispatch =>{
  try{
    console.log(JSON.stringify(dataUsul))
    dispatch({ type: POST_USULAN_NEW_PENDING })
    const res = await axios.post('http://202.125.94.151:9393/api/peremajaan/golongan/update-data', dataUsul ,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch({ type: POST_USULAN_NEW_SUCCESS, payload: res.data})
    toast.success("Data Usulan Berhasil Masuk")
  }catch(err){
    dispatch({ type: POST_USULAN_NEW_ERROR , payload: err})
    toast.error("Ada Kesalahan")
  }
}