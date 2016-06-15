import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import userDetailReducer from './userdetail_reducer';
import langLoc from './location_lang_reducer';
import page from './page_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  langLoc,
  usersDetails : userDetailReducer,
  page
  });

export default rootReducer;
