const initialState = { userData: [] }

export default function submitReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'SUBMIT_DATA':
            return {
                ...state,
                userData: actions.payload
            }
        default:
            return state
    }
}