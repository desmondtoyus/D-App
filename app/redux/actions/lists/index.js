import axios from 'axios';
import { actionTypes } from '../../../constants/actionTypes';

export const listProjects = ()=> dispatch =>{
    axios.get(`/api/listing`)
        .then((response)=>{
            dispatch({type:actionTypes.LIST_PROJECTS, payload: response.data })
        })
        .catch(err=>console.log(err))

}