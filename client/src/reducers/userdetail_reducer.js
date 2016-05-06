import { SHOW_USER_DATA } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case SHOW_USER_DATA:
    return { ...state, [action.payload.userData.login]: action.payload.userData}
  }
  return state;
}
