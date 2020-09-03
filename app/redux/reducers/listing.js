import { actionTypes } from '../../constants/actionTypes';

let initialState = {
    id:0, 
    name:'',
    location:'',
    loading: false,
}

export default (state={...initialState}, action)=>{
    switch(action.type){
        case actionTypes.READ_LISTING:
        return {...state, id: action.payload.id, name: action.payload.name, location: action.payload.location}

        default:
            return state;
    }
    
}