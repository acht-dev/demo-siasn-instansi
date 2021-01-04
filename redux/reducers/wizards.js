import * as types from "../types";
import dataProcedures from "./../../data/prosedurs.json";

const procedureOne = dataProcedures.prosedurRowOne;
const procedureTwo = dataProcedures.prosedurRowTwo;
const procedureThree = dataProcedures.prosedurRowThree;
const initialState = {
  procedureOne,
  procedureTwo,
  procedureThree,
};

export const wizards = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CHECK":
      if (action.item[0].id > 9 && action.item[8].id <= 18) {
        return {
          ...state,
          procedureTwo: action.item,
        };
      } else if (action.item[0].id > 18 && action.item[8].id <= 27) {
        return {
          ...state,
          procedureThree: action.item,
        };
      } else {
        return {
          ...state,
          procedureOne: action.item,
        };
      }
    default:
      return state;
  }
};
