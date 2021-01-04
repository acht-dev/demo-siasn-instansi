import * as types from "../types";

const initialState = {
    isLoading: false,
    data: {}
}

export const getUsulanAsn = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_LIST_USULAN_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_LIST_USULAN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
