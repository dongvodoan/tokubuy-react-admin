import { combineReducers } from 'redux';
import { users, auth, common } from './reducers/index';

export default combineReducers({
    users,
    auth,
    common
});
