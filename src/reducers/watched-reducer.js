import {ADD_FILM_TO_WATCHED, REMOVE_FILM_FROM_WATCHED} from "../actions/watched-action";

const initialState = {
    watched: []
};

export function watchedFilms(state = initialState, action) {
    switch (action.type) {
        case (ADD_FILM_TO_WATCHED):
            return ({watched: state.watched.concat(action.film)});

        case (REMOVE_FILM_FROM_WATCHED):
            return ({watched: state.watched.filter(item => item.imdbID !== action.id)});

    }
    return state
}
