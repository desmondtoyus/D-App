import axios from 'axios';
import { actionTypes } from '../../../constants/actionTypes';
export const readLists = ()=> dispatch =>{
    axios.get(`/api/listing`)
        .then((response)=>{
            dispatch({type:actionTypes.READ_LISTING, payload: response.data })
        })
        .catch(err=>console.log(err))

}