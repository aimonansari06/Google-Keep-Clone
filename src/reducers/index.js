import { combineReducers } from 'redux';
import createReducer from './createReducer';
import deleteReducer from './deleteReducer';
import archivereducer from './archiveReducer';

export default combineReducers({
    create:createReducer,
    dlt:deleteReducer,
    archive:archivereducer

});