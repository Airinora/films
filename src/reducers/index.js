import { combineReducers } from 'redux';
import counter from './counter-reducer';
import {films} from './films-reducer';
import {singleFilm} from './single-film-reducer'
import {filter} from "./filter-reducer";
import {watchedFilms} from './watched-reducer';

const reducers = {
    counter,
    films,
    singleFilm,
    filter,
    watchedFilms
};

export default combineReducers(reducers);
