import {
    ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
} from '../actions/users';

const INITIAL_STATE = {user: null, status: null, error: null, loading: false};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {

        case ME_FROM_TOKEN:
            return {...state, user: null, loading: true};

        case ME_FROM_TOKEN_SUCCESS:
            return {...state, user: action.payload.data.user, loading: false};

        case ME_FROM_TOKEN_FAILURE:
            return {...state, user: null, loading: false};

        case RESET_TOKEN:
            return {...state, user: null, loading: false};

        default:
            return state;
    }
}
