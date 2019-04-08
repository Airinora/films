
import {FILM_BY_ID, FILM_HAS_ERRORED, FILM_IS_LOADING} from "../actions/film-action";

const initialState = {
    error: '',
    isLoading: false,
    film: {}
};

export function singleFilm(state = initialState, action) {
    switch (action.type) {
        case (FILM_HAS_ERRORED):
            return ({...state, error: action.error});

        case (FILM_IS_LOADING):
            return ({...state, isLoading: action.isLoading});

        case (FILM_BY_ID):
            return ({...state, film: action.film})

    }
    return state
}