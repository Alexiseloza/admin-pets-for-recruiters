import {combineReducers} from 'redux';

import citasReducer from './citasReducer';
import validacioReducer from './validacionReducer';


export  default combineReducers({
     citas: citasReducer,
     error: validacioReducer,
});