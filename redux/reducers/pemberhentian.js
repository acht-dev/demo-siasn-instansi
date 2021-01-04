import * as types from "../types";

const initialState = {
    multivalue: {}
}

export const pemberhentian = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_DATA_ID_SUCCESS:
            return {
                ...state,
                multivalue : action.payload
            }
        default:
            return state;
    }
}
