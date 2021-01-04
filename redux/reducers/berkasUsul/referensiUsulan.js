import * as types from "../../types";

const initialState = {
  dataGolongan: [],
  dataKP: [],
}

export const referensiUsulan = (state = initialState, action) =>{
  switch(action.type){
    case types.GET_REF_GOLONGAN_SUCCESS:
      return {
        ...state,
        dataGolongan: action.payload
      }
    case types.GET_REF_KP_SUCCESS:
      return {
        ...state,
        dataKP: action.payload
      }
    default:
      return state;
  }
}