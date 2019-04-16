import { combineReducers } from 'redux';
import spalshReducer from '../modules/splash/splash.reducer';
import homeReducer from '../modules/home/home.reducer';

export default combineReducers({
    splash: spalshReducer,
    home: homeReducer
});