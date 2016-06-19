import {
        SET_LOCATION_LANG,
        SHOW_USER_DATA,
        UPDATE_PAGE
      } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case SET_LOCATION_LANG:
  return {...state, location : action.location, language: action.language}
      case SHOW_USER_DATA:
  return {...state, pagination: action.pagination}
      case UPDATE_PAGE:
  return {...state, pageTurn : action.page}
    }
  return state;
}
