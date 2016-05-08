import {
        SET_LOCATION_LANG
      } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case SET_LOCATION_LANG:
  return {...state, location : action.location, language: action.language}

  }
  return state;
}
