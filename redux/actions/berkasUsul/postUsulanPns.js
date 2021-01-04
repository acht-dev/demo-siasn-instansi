import {
POST_USULAN_PNS_ERROR,
POST_USULAN_PNS_PENDING,
POST_USULAN_PNS_SUCCESS
} from "../../types"
import axios from "axios"
// import { toast } from "react-toastify";

export const postUsulanPns = (id, sumber) => async dispatch =>{
  try{
    dispatch({type: POST_USULAN_PNS_PENDING})
    const res = await axios.post(`http://202.125.94.151:9393/api/peremajaan/golongan/simpan-usul?pns_orang_id=${id}&sumber=${sumber}`)

    dispatch({
      type: POST_USULAN_PNS_SUCCESS,
      payload: res.data
    })
    // toast.success("MY SUCCESS");
  }catch(err){
    dispatch({
      type: POST_USULAN_PNS_ERROR,
      payload: err
    })
  }
}
