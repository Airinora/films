import {ADD_FILM_TO_WATCHED, REMOVE_FILM_FROM_WATCHED} from "../actions/watched-action";
import {ADD_FILM_TO_FAVOURITE, REMOVE_FILM_FROM_FAVOURITE} from "../actions/favourite-action";


export const getFromLocalStorage = function(key) {
    return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : [];
};

const addFilmToLocal = function(key, film) {
    const films = getFromLocalStorage(key);
    films.push(film);
    window.localStorage.setItem(key, JSON.stringify(films));

};

const removeFilmFromLocal = function(key, id) {
    const films = getFromLocalStorage(key);
    const filmsNew = films.filter(item => item.imdbID !== id);
    window.localStorage.setItem(key, JSON.stringify(filmsNew));

};

export const addFilmToLocalStorage = () => (next) => (action) => {
    if (action.type === ADD_FILM_TO_WATCHED) {
        addFilmToLocal('watched', action.film);
    } else if (action.type === ADD_FILM_TO_FAVOURITE) {
        addFilmToLocal('favourite', action.film);
    }
    return next(action);
};

export const removeFilmFromLocalStorage = () => (next) => (action) => {
    if (action.type === REMOVE_FILM_FROM_WATCHED) {
        removeFilmFromLocal('watched', action.id);
    } else if (action.type === REMOVE_FILM_FROM_FAVOURITE) {
        removeFilmFromLocal('favourite', action.id);
    }
    return next(action);
};
