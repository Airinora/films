import { combineReducers } from 'redux';
import counter from './counter-reducer';
import {films} from './films-reducer';
import {singleFilm} from './single-film-reducer'

const reducers = {
    counter,
    films,
    singleFilm
};

export default combineReducers(reducers);
