const initialState = {
    user: null, 
}

const SET_USER = 'SET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function setUser(payload) {
    return {
        type: SET_USER,
        payload
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: null
    }
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            return {...state, user: payload}
        case LOGOUT_USER:
            return {...state, user: payload}
        default:
            return {...state}
        
    }
}