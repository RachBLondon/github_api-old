import {    NEXT_PAGE,
  SET_LOCATION_LANG, TURN_PAGE
      } from '../actions/types';

export default function(state = 0, action){
  switch(action.type){
      case SET_LOCATION_LANG:
  return  state = 1
      case NEXT_PAGE:
  return  state +1
      case TURN_PAGE :
  return action.page
    }
  return state;
}
