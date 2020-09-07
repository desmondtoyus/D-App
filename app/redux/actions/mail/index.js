import { actionTypes } from '../../../constants/actionTypes';
export const inputhandler =({prop, value})=>dispatch=>{
    dispatch({type: actionTypes.INPUT_CHANGE, prop, value})
}

export const resetErrors =()=>dispatch=>{
    dispatch({type: actionTypes.RESET_ERRORS})
}
export const resetReducers =()=>dispatch=>{
    dispatch({type: actionTypes.RESET_INPUTS})
}

