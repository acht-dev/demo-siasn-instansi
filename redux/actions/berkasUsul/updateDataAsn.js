import{
EDIT_USULAN_PNS_ERROR,
EDIT_USULAN_PNS_SUCCESS,
EDIT_USULAN_PNS_PENDING
} from "../../types"
import {API} from "../../../configs"

import { toast } from "react-toastify";

export const updateDataAsn = (bodyData) => async dispatch => {
  try{
    dispatch({type: EDIT_USULAN_PNS_PENDING})

    console.log(bodyData)
    const res = await API.updateDataAsn(bodyData)
    dispatch({
      type: EDIT_USULAN_PNS_SUCCESS,
      payload: res.data
    })
    toast.success("Data Updated Successfully");
  }catch(err){
    toast.error("Something Went Wrong!");
    dispatch({
      type: EDIT_USULAN_PNS_ERROR,
      payload: err
    })
  }
}
