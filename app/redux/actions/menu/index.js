import { actionTypes } from '../../../constants/actionTypes';

export const changesView =({prop, value})=>dispatch=>{
 dispatch({type: actionTypes.CHANGE_MENU, prop, value})
}

export const changesActiveMenu=(payload)=>dispatch=>{
 dispatch({type: actionTypes.READ_ACTIVE_MENU, payload})
}