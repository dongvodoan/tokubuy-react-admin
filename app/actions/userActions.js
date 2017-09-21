import agent from '../agent';

export function fetchUser() {
    return {
        type: "FETCH_USER",
        payload: agent.User.getAll()
    }
}