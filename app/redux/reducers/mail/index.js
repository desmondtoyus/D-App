import { actionTypes } from '../../../constants/actionTypes';
const initialState={
    name:'',
    email:'',
    mobile:'',
    subject:'',
    message:'',
    nameErr:null,
    emailErr:null,
    mobileErr:null,
    subjectErr:null,
    messageErr:null,
    responseMsg: ''
}


export default ((state={...initialState}, action)=>{
    switch(action.type){
        case actionTypes.INPUT_CHANGE:
            return {
                ...state, [action.prop]:action.value
            }
        case actionTypes.RESET_INPUTS:
            return{
                ...initialState,
            }
        case actionTypes.RESET_ERRORS:
            return{
                ...state,
                success: null,
                nameErr:null,
                emailErr:null,
                mobileErr:null,
                subjectErr:null,
                messageErr:null,
                responseMsg: ''
            }
        default:
            return state;

    }

})