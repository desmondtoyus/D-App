import { actionTypes } from '../../../constants/actionTypes';

let initialState = {
    loading: false,
    projects:[]
}

export default (state={...initialState}, action)=>{
    switch(action.type){
        case actionTypes.LIST_PROJECTS:
            return {...state, loading:false, projects: action.payload}
        case actionTypes.LIST_CHANGES:
            return { ...state, 
                [action.prop]:action.value, 
             }  

        default:
            return state;
    }
    
}