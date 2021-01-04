import * as types from "../types";

const initialState = {
    multivalue: {}
}

export const kp1 = (state = initialState, action) =>{
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
