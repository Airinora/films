import { combineReducers } from 'redux';
import {films} from './films-reducer';
import {singleFilm} from './single-film-reducer'
import {filter} from "./filter-reducer";
import {watchedFilms} from './watched-reducer';
import {favouriteFilms} from './favourite-reducer';

const reducers = {
    films,
    singleFilm,
    filter,
    watchedFilms,
    favouriteFilms
};

export default combineReducers(reducers);
