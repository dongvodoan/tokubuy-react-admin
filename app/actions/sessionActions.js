import agent from '../agent';

export function loginUser(email, password) {
    return {
        type: "LOGIN",
        payload: agent.Auth.login(email, password)
    }
}