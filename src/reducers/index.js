import { combineReducers } from 'redux';
import counter from './counter-reducer';
import {films} from './films-reducer';
import {singleFilm} from './single-film-reducer'
import {filter} from "./filter-reducer";
import {watchedFilms} from './watched-reducer';
import {favouriteFilms} from './favourite-reducer';

const reducers = {
    counter,
    films,
    singleFilm,
    filter,
    watchedFilms,
    favouriteFilms
};

export default combineReducers(reducers);
