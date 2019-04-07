
import {FILMS_ARE_LOADING, FILMS_FETCH_DATA_SUCCESS, FILMS_HAVE_ERRORED} from "../actions/action";

const initialState = {
    error: '',
    isLoading: false,
    items: [],
    total: 0,
    value: ''
};

export function films(state = initialState, action) {
    switch(action.type) {
        case (FILMS_HAVE_ERRORED):
            return ({ ...state,  error: action.error });

        case (FILMS_ARE_LOADING):
            return ({...state,  isLoading: action.isLoading});

        case (FILMS_FETCH_DATA_SUCCESS):
            const results = parseInt(action.total, 10);
            return ({...state,  items: action.films, total: results});

    }
    return state;
}
