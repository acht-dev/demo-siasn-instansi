import * as types from "../types";

const initialState = {
  data: {},
  isLoading: false,
  dataName: {},
};

export const getDataNip = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BYID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case types.GET_NAME_SUCCESS:
      return {
        ...state,
        dataName: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
