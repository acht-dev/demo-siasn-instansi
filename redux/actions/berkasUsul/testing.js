// import {API} from "../../../configs"
// import {COBAIN} from "../../types"
import axios from "axios"
import {COBAIN, COBAIN_PENDING} from "../../types"

export const testing = (id) => async dispatch =>{
  try{
    console.log(id)
    dispatch({type: COBAIN_PENDING})
    const res = await axios.get('http://9ee9828d5448.ngrok.io');
    dispatch({
      type: COBAIN,
      payload: res.data
    })
    console.log(res.data)
  }catch(err){
    console.log(err)
  }
}