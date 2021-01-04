import * as types from "../../types"

const initialState = {
  nipAsn : {},
  isLoading: false,
  nameAsn: {},
  coba: {},
  getUsulanId:{},
  getGolongan: [],
  isLoadingGolongan: true,
}

export const getIdAsn = (state = initialState, action) => {
  switch(action.type){
    case types.GET_ASN_SUCCESS:
      return {
        ...state,
        nipAsn: action.payload,
        isLoading: false,
      }
    case types.GET_NAME_ASN_SUCCESS:
      return {
        ...state,
        nameAsn: action.payload,
        isLoading: false,
      }
    case types.COBAIN:
      return {
        ...state,
        coba: action.payload,
        isLoading: false,
      }
    case types.POST_USULAN_PNS_SUCCESS:
      return {
        ...state,
        getUsulanId: action.payload,
        // isLoading: false,
      }
    case types.GET_GOLONGAN_PNS_SUCCESS:
      return {
        ...state,
        getGolongan: action.payload,
        isLoadingGolongan: false,
      }
    default:
      return state;
  }
}