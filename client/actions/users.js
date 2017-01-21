import axios from 'axios';

export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';
export const RESET_USER = 'RESET_USER';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function meFromToken(tokenFromStorage) {
    //check if the token is still valid, if so, get me from the server

    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: ME_FROM_TOKEN,
        payload: request,
    };
}

export function meFromTokenSuccess(currentUser) {
    return {
        type: ME_FROM_TOKEN_SUCCESS,
        payload: currentUser,
    };
}

export function meFromTokenFailure(error) {
    return {
        type: ME_FROM_TOKEN_FAILURE,
        payload: error,
    };
}

export function resetToken() {
    return {
        type: RESET_TOKEN,
    };
}

export function resetUser() {
    return {
        type: RESET_USER,
    };
}