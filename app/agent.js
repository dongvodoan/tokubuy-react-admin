import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:1338/api/v1';
const responseBody = res => res.body;

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWI4ZTgyNWRhOGU5YTA5OTc4ZmZkZWMiLCJlbWFpbCI6InZkZG9uZ2JrQGdtYWlsLmNvbSIsIm5pY2tuYW1lIjoiZG9uZ3ZkIiwiaWF0IjoxNTA1OTAyMjI3LCJleHAiOjE1MDY1MDcwMjd9.CjZ-92enzhAs4HyOGuitiiRK6PPqLGRe3inOaDB1Y3s';
const tokenPlugin = req => {
    if (token) {
        req.set('x-access-token', `${token}`);
    }
};

const requests = {
    del: url =>
        superagent.del(`${API_OT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const User = {
    getAll: () => requests.get('/admin/users')
};

const Auth = {
    current: () =>
        requests.get('/user'),
    login: (email, password) =>
        requests.post('/users/login', { user: { email, password } }),
    register: (username, email, password) =>
        requests.post('/users', { user: { username, email, password } }),
    save: user =>
        requests.put('/user', { user })
};

export default {
    User,
    setToken: _token => { token = _token; }
};
