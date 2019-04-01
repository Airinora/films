
const initialState = {
    number: 0
};

export default function rootReducer(state = initialState) {
    return state
}

// export function pageReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'CLICK_PLUS':
//             number++;
//             return { ...state};
//         case 'CLICK_MINUS':
//             number--;
//             return { ...state};
//         default:
//             return state
//     }
// }