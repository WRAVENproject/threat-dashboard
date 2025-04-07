import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducers';
import threatsReducer from './threats/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  threats: threatsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;