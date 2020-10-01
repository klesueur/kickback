const initialState = {
    deals: []
}

const SET_DEALS = 'SET_DEALS'

export function setDeals(payload) {
    return {
        type: SET_DEALS,
        payload
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_DEALS:
            return {...state, deals: payload}
        default:
            return {...state}
    }
}