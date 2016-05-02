import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import githubReducer from './github_reducer';

const rootReducer = combineReducers({ form, auth: authReducer, github :githubReducer });

export default rootReducer;
