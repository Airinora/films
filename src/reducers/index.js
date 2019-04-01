import { combineReducers } from 'redux';
import counter from './counter-reducer';

const reducers = {
    counter
};

export default combineReducers(reducers);
