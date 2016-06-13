import {
        SET_LOCATION_LANG,
        SHOW_USER_DATA
      } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case SET_LOCATION_LANG:
  return {...state, location : action.location, language: action.language}
      case SHOW_USER_DATA:
  return {...state, pagination: action.pagination }
  //   case PAGINATION_UP:
  // return {...state, pagination: 'page up' }

  }
  return state;
}
