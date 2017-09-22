import {
    LOGIN,
    LOGIN_FULFILLED
} from '../constants/actionTypes';

export default (state = {users: []}, action) => {
    switch (action.type) {
        case LOGIN:
        case LOGIN_FULFILLED:
            return {
                ...state, redirectTo: '/users'
            };
            break;
        default:
            return state;
    }
};