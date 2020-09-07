import { actionTypes } from '../../../constants/actionTypes';
const initialState={
    activeMenu:'home',
}

export default ((state={...initialState}, action)=>{
        switch (action.type) {
            case actionTypes.CHANGE_MENU:
                return { ...state, 
                    [action.prop]:action.value, 
                 }  
            case actionTypes.READ_ACTIVE_MENU:
                return { ...state,  
                    activeMenu:action.payload,
                }
            default:
                return state;
        }
})
