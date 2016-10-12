import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
// import auth from './auth';
import modals from './modals';
import auth from './auth';
import checkout from './checkout';

const rootReducer = combineReducers({
	auth,
	checkout,
	modals
});

export default rootReducer;
