import {ADD_FILM_TO_FAVOURITE, REMOVE_FILM_FROM_FAVOURITE} from "../actions/favourite-action";


const initialState = {
    favourite: []
};

export function favouriteFilms(state = initialState, action) {
    switch (action.type) {
        case (ADD_FILM_TO_FAVOURITE):
            return ({favourite: state.favourite.concat(action.film)});

        case (REMOVE_FILM_FROM_FAVOURITE):
            return ({favourite: state.favourite.filter(item => item.imdbID !== action.id)});

    }
    return state
}
