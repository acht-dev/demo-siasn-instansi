import {GET_DATA_PNS_ERROR, 
    GET_DATA_PNS_SUCCESS, 
    GET_DATA_PNS_PENDING,
} from "../types";
import axios from "axios";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrUTE2N18xXzE0elM1NHZWazA5dnM4NWtVZHMyeHBGc2JZVjY4UEVzVW84In0.eyJleHAiOjE2MDgxNDkwMDIsImlhdCI6MTYwODE0ODcwMiwianRpIjoiM2E4NzY0MDEtNmUwZi00YWQ0LWI3ODEtOTM3ZmRjZjY1N2QwIiwiaXNzIjoiaHR0cDovL2lhbS5zaWFzbi5pbmZvL2F1dGgvcmVhbG1zL2hlbGxvLXdvcmxkLWF1dGh6IiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImI0ZTE4YWIzLTEzYjYtNDJiYS04YjM1LTc2OTgwMTEzYTIwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6InNpbXBlZ25hcy1kZXYiLCJzZXNzaW9uX3N0YXRlIjoiODQyNDUzNTEtZTdmMS00ZDY3LTk4ZGEtMGRkN2ZlYjNkYWJhIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiQWRtaW4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbIm1hbmFnZS1yZWFsbSIsIm1hbmFnZS11c2VycyIsInZpZXctdXNlcnMiLCJxdWVyeS1ncm91cHMiLCJxdWVyeS11c2VycyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Ik9lbWFkaSBia24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzaW1wZWduYXMiLCJnaXZlbl9uYW1lIjoiT2VtYWRpIiwiZmFtaWx5X25hbWUiOiJia24iLCJlbWFpbCI6Im9lbWFkaWJrbjk5QGdtYWlsLmNvbSJ9.j46eU40DpZqF-xgbRNpR3b9KbssVwglLRiSALXVQ-rCXsoL2UUEDozclTWECyQVFv-V32KpacUCNKjQsi5rop677Nt68PcBPVbFIB43LgYHX1eOI4D4Z1XZkijq_-11DIOLEMMa7vlFn0L4_Rb67Pd32wGIYV9SM8j7epm9Iz5UWDVUWY1ief25ksnhC3Cl32VY6DP9LZ3R_7NxsZuTRY8giHoU3P-hiHXByxzW0CZzeEWclWkI-sSR8CLSVxcQCsLCDoF_5V3ACZttR16N5u5VNW2bQtBrIPuTVuBGPbsZwczsx9VuB7fpArymUb4Xk_d9chMM-jYOQqKSnQ6JZuQ"
export const getUserNip = () => async dispatch => {
    
    try{
        dispatch({type: GET_DATA_PNS_PENDING});
        const res = await axios.get("https://cors-anywhere.herokuapp.com/http://202.125.94.151:9797/api/pns",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(JSON.stringify(res.data.Value))
        dispatch({
            type: GET_DATA_PNS_SUCCESS,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: GET_DATA_PNS_ERROR,
            payload: err
        })
    }
}
