import {
    LOGIN,
    LOGIN_REJECTED,
    LOGIN_FULFILLED
} from '../constants/actionTypes';

export default (state = {users: []}, action) => {
    switch (action.type) {
        case LOGIN:
        case LOGIN_REJECTED:
            if (action.error) {
                return {
                    ...state, errors: action.payload.response.body
                }
            }
            break;
        case LOGIN_FULFILLED:
            return {
                ...state, redirectTo: '/users'
            };
            break;
        default:
            return state;
    }
};