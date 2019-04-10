
export const ADD_FILM_TO_WATCHED = 'ADD_FILM_TO_WATCHED';
export const REMOVE_FILM_FROM_WATCHED = 'REMOVE_FILM_FROM_WATCHED';

export function addFilmToWatched(film) {
    return {
        type: ADD_FILM_TO_WATCHED,
        film
    }
}

// function removeFilmFromWatched(id) {
//     return {
//         type: REMOVE_FILM_FROM_WATCHED,
//         id
//     }
// }
