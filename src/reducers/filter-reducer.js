import {CHANGE_ACTIVE_PAGE, CHANGE_TITLE} from "../actions/filter-action";

const initialState = {
    title: '',
    activePage: 1
};

export function filter(state = initialState, action) {
    switch (action.type) {
        case (CHANGE_ACTIVE_PAGE):
            return ({...state, activePage: action.activePage});

        case (CHANGE_TITLE):
            return ({...state, title: action.title});

    }
    return state;
}
