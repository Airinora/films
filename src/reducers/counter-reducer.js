
const initialState = {
    number: 0
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case 'CLICK_PLUS':
            return state + 1;
        case 'CLICK_MINUS':
            return state - 1;
        default:
            return state
    }
};
