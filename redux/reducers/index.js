import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { wizards } from "./wizards";
import { viewInstansi } from "./viewInstansi";
import { getDataNip } from "./getDataNip";
import { getUsulanAsn } from "./getUsulanAsn";
import { kp1 } from "./kp1";
import { getIdAsn } from "./berkasUsul/getIdAsn";
import { pemberhentian } from "./pemberhentian";
import { referensiUsulan } from "./berkasUsul/referensiUsulan";

export default combineReducers({
  post: postReducer,
  wizards: wizards,
  viewInstansi: viewInstansi,
  getDataNip: getDataNip,
  getUsulanAsn: getUsulanAsn,
  kp1: kp1,
  getIdAsn: getIdAsn,
  pemberhentian: pemberhentian,
  referensiUsulan: referensiUsulan,
});
