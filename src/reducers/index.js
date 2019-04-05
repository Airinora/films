import { combineReducers } from 'redux';
import counter from './counter-reducer';
import {films} from './films-reducer';

const reducers = {
    counter,
    films
};

export default combineReducers(reducers);
