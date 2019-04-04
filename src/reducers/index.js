import { combineReducers } from 'redux';
import counter from './counter-reducer';
import { filmsError, filmsLoading, filmsSuccess } from './films-reducer';

const reducers = {
    counter,
    filmsError,
    filmsLoading,
    filmsSuccess

};

export default combineReducers(reducers);
