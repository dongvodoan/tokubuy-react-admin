import {
    FETCH_USER,
    FETCH_USER_REJECTED,
    FETCH_USER_FULFILLED
} from '../constants/actionTypes';

export default (state = {users: []}, action) => {
    switch (action.type) {
        case FETCH_USER:
        case FETCH_USER_REJECTED:
            if (action.payload.response.body.status===401) {
            console.log(action.error);
                return {
                    ...state, redirectTo: '/login'
                };
            }
            break;
        case FETCH_USER_FULFILLED:
            return {
                ...state, users: action.payload.data.docs
            };
            break;
        default:
            return state;
    }
};