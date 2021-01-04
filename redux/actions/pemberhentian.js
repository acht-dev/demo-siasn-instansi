import {GET_DATA_ID_ERROR, 
    GET_DATA_ID_SUCCESS, 
    GET_DATA_ID_PENDING,
} from "../types";

export const pemberhentian = (body) => async dispatch => {
    try{
        console.log(body)
        dispatch({type: GET_DATA_ID_PENDING});
        //const res = await axios.get("https://cors-anywhere.herokuapp.com/http://202.125.94.151:9797/api/pns",{
            //headers: {
                //Authorization: `Bearer ${token}`
            //}
       // });
        //console.log(JSON.stringify(res.data.Value))
        dispatch({
            type: GET_DATA_ID_SUCCESS,
            payload: body
        });
    }catch(err){
        dispatch({
            type: GET_DATA_ID_ERROR,
            payload: err
        })
    }
}