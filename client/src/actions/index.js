import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const SET_USER = 'SET_USER';

export function fetchUsers() {
    const request = axios.get('//localhost:8080/users')

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function setUser(user) {
    const request = axios.get(`//localhost:8080/users/${user}`)

    return {
        type: SET_USER,
        payload: request
    }
}