import {FILMS_ARE_LOADING, FILMS_FETCH_DATA_SUCCESS, FILMS_HAVE_ERRORED} from "../actions/action";

export function filmsError(state = false, action) {
    if (action.type === FILMS_HAVE_ERRORED) {
        return action.hasErrored;
    } 
    return state;
    
}

export function filmsLoading(state = false, action) {
    if (action.type === FILMS_ARE_LOADING) {
        return action.isLoading;
    } 
    return state;
    
}

export function filmsSuccess(state = [], action) {
    if (action.type === FILMS_FETCH_DATA_SUCCESS) {
        return action.items;
    } 
    return state;
    
}