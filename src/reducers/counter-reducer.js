
const initialState = {
    number: 0
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case 'CLICK_PLUS':
            return {number: state.number + 1};
        case 'CLICK_MINUS':
            return {number: state.number - 1};
        default:
            return state;
    }
};
