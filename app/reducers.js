import { combineReducers } from 'redux';
import { users, authen, common, auth } from './reducers/index';

export default combineReducers({
    users,
    authen,
    common,
    auth
});
