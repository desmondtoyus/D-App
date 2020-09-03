import { actionTypes } from '../../../constants/actionTypes';

export const changesView =({prop, value})=>dispatch=>{
    console.log(actionTypes.READ_ACTIVE_VIEW, prop, value )
 dispatch({type: actionTypes.READ_ACTIVE_VIEW, prop, value})
}

export const changesActiveMenu=({prop, value})=>dispatch=>{
 dispatch({type: actionTypes.READ_ACTIVE_MENU, prop, value})
}