import {
    FETCH_USER,
    FETCH_USER_FULFILLED
} from '../constants/actionTypes';

export default (state = {users: []}, action) => {
    switch (action.type) {
        case FETCH_USER:
        case FETCH_USER_FULFILLED:
            return {
                ...state, users: action.payload.data.docs
            };
            break;
        default:
            return state;
    }
};