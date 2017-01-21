import axios from 'axios';

export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

/**
 * @param token
 * @returns {{type: string, payload: *}}
 */
export function meFromToken(token) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/userinfo?token=${token}`,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return {
        type: ME_FROM_TOKEN,
        payload: request,
    };
}

/**
 * @param currentUser
 * @returns {{type: string, payload: *}}
 */
export function meFromTokenSuccess(currentUser) {
    return {
        type: ME_FROM_TOKEN_SUCCESS,
        payload: currentUser.data,
    };
}

/**
 * @param error
 * @returns {{type: string, payload: *}}
 */
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