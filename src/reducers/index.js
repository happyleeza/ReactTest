import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    router: routerReducer,
    pageReducer
});

export default rootReducer;
