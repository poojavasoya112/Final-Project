import { SIGNIN_FAIL, SIGNIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../Consts/Action.type';

const initialState = {
    users: null,
    error: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                users: action.payload,
                error: null
            };
            break;
        case SIGNUP_FAIL:
            return {
                users: null,
                error: action.payload
            }
            break;
        case SIGNIN_SUCCESS :
            return{
                users : action.payload,
                error : null
            }
            break;
        case SIGNIN_FAIL :
            return{
                users : null,
                error : action.payload
            }
        default:
            return state;
    }
}

export default UserReducer