import { SHOW_USER_DATA,
        SET_LOCATION_LANG
      } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case SET_LOCATION_LANG:
  return {...state, location : action.location, language :action.language }
      case SHOW_USER_DATA:
    return { ...state, [action.payload.userData.login]: action.payload.userData}
  }
  return state;
}
