import {
UPLOAD_DOKUMEN_PNS_ERROR,
UPLOAD_DOKUMEN_PNS_SUCCESS,
UPLOAD_DOKUMEN_PNS_PENDING
} from "../../types";
import axios from "axios"
import { API } from "../../../configs";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const token = Cookies.get('token');

export const uploadFileAsn = (bodyData) => async dispatch =>{
  try{
    dispatch({type: UPLOAD_DOKUMEN_PNS_PENDING})
    const res = await axios.post(`http://202.125.94.151:9393/api/peremajaan/upload-dok`,
    bodyData,
    {
      headers:{
        "Content-Type": "multipart/form-data"
      }
    }
    )
    console.log(res.data)
    dispatch({
      type: UPLOAD_DOKUMEN_PNS_SUCCESS,
      payload: res.data
    });
    toast.success("Dokumen Sukses Tersimpan");
  }catch(err){
    dispatch({
      type: UPLOAD_DOKUMEN_PNS_ERROR,
      payload: err
    })
    toast.error("Ada Kesalahan, mohon upload ulang");
  }
}