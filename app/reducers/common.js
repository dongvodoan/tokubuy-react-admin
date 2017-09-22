import {
    REDIRECT,
} from '../constants/actionTypes';

const defaultState = {
    appName: 'Conduit',
    token: null,
    viewChangeCounter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {

        case REDIRECT:
            return { ...state, redirectTo: null };

        default:
            return state;
    }
};
