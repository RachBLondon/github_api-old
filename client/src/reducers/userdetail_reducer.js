import { SHOW_USER_DATA,
        SET_LOCATION_LANG
      } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
      case SHOW_USER_DATA:
    return Object.assign([], state,  action.payload)
  }
  return state;
}
