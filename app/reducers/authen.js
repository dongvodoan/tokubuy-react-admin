import {
    LOGIN_FULFILLED
} from '../constants/actionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case LOGIN_FULFILLED :
            if (action.payload.data != null) {
                state = 200;
            } else {
                state = 0;
            }
            return state;
        default:
            return state;
    }
};