import agent from '../agent';

export function loginUser(credentials) {
    return {
        type: "LOGIN",
        payload: agent.Auth.login(credentials.email, credentials.password)
    }
}