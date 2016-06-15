import { SET_LOCATION_LANG, TURN_PAGE } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
      case SET_LOCATION_LANG:
  return  {... state, page : 1}
      case TURN_PAGE:
  return  {...state, page : action.page}
    }
  return state;
}
