import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import {addFilmToLocalStorage, getFromLocalStorage, removeFilmFromLocalStorage} from "./local-storage";

// Redux dev tools.
// See more: https://github.com/zalmoxisus/redux-devtools-extension
function getDevTools() {
    return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

const stateFromLocalStorage = {
    watchedFilms: {
        watched: getFromLocalStorage('watched')
    },
    favouriteFilms: {
        favourite: getFromLocalStorage('favourite')
    }
};

export function configureStore(initialState = stateFromLocalStorage) {
    let middlewares = [thunk, addFilmToLocalStorage, removeFilmFromLocalStorage];

    let enhanser = compose(
        applyMiddleware(...middlewares),
        getDevTools()
    );

    return createStore(
        reducers,
        initialState,
        enhanser
    );
}
