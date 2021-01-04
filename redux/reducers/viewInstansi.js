import * as types from "./../types";
import dataProcedures from "./../../data/prosedurs.json";

const procedureOne = dataProcedures.prosedurRowOne;
const procedureTwo = dataProcedures.prosedurRowTwo;
const procedureThree = dataProcedures.prosedurRowThree;
const procedureDataUtama = dataProcedures.dataUtama;
const initialState = {
  procedureOne,
  procedureTwo,
  procedureThree,
  procedureDataUtama,
  prosedureName: "",
};

export const viewInstansi = (state = initialState, action) => {
  switch (action.type) {
    case types.WIZARDS[0]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[1]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[2]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[3]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[4]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[5]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[6]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[7]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[8]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[9]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[10]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[11]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[12]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[13]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[14]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[15]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[16]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[17]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[18]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[19]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[20]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[21]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[22]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[23]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[24]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[25]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    case types.WIZARDS[26]:
      return {
        ...state,
        prosedureName: action.payload,
      };
    default:
      return state;
  }
};
