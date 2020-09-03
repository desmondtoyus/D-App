import { actionTypes } from '../../constants/actionTypes';
const initialState={
    page:'',
    pageTitle:'',
    pageDesc:'',
    activeMenu:'',
}

export default ((state={...initialState}, action)=>{
        switch (action.type) {
            case actionTypes.READ_ACTIVE_VIEW:
                return { ...state, 
                    [action.prop]:action.value, 
                 }  
            case actionTypes.READ_ACTIVE_MENU:
                return { ...state,  
                    activeMenu:action.payload.activeMENU,
                }
            default:
                return state;
        }
})

// pageTitle:action.payload.title,  
// pageDesc:action.payload.pageDesc