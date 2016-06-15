import { SET_LOCATION_LANG, TURN_PAGE, SHOW_USER_DATA } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
      case SET_LOCATION_LANG:
  return  {... state, page : "1"}
      case TURN_PAGE:
  return  {...state, page : action.page}
      case SHOW_USER_DATA:
  return {...state, lastPage: action.lastPage}

    }
  return state;
}
