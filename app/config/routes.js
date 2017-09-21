import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from '../store';

import Main from '../components/layouts/Main';
import { UserList, Other, Login, Dashboard } from '../containers/index';

var authenToken = (nextState, replace, next) => {
    let token = window.localStorage.getItem('jwt');
    if (token == null) {
        replace('login');
    }
    next();
}

export default (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Main} onEnter = {authenToken} >
                <IndexRoute path="/home" component={Dashboard} />
                <Route path="/home" component={Dashboard} />
                <Route path="/users" component={UserList} />
                <Route path="/others" component={Other} />
            </Route>
        </Router>
    </Provider>
);
