
export const ADD_FILM_TO_FAVOURITE = 'ADD_FILM_TO_FAVOURITE';
export const REMOVE_FILM_FROM_FAVOURITE = 'REMOVE_FILM_FROM_FAVOURITE';


export function addFilmToFavourite(film) {
    return {
        type: ADD_FILM_TO_FAVOURITE,
        film
    }
}

export function removeFilmFromFavourite(id) {
    return {
        type: REMOVE_FILM_FROM_FAVOURITE,
        id
    }
}
