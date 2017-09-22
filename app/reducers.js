import { combineReducers } from 'redux';
import { users, authen } from './reducers/index';

export default combineReducers({
    users,
    authen
});
