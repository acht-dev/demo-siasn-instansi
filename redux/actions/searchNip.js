import { GET_BYID_ERROR, GET_BYID_PENDING, GET_BYID_SUCCESS } from "../types";
import axios from "axios";
import { API } from "../../configs";

export const findByNip = (nipLama, nipBaru) => async (dispatch) => {
  try {
    console.log(nipBaru);
    dispatch({ type: GET_BYID_PENDING });
    const res = await API.searchNip(nipLama, nipBaru);
    dispatch({
      type: GET_BYID_SUCCESS,
      payload: res.data.Value[0],
    });
  } catch (err) {
    dispatch({
      type: GET_BYID_ERROR,
      payload: err,
    });
  }
};
