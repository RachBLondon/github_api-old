import {
        GITHUB,
        SHOW_USER_DATA
        } from '../actions/types';

export default function(state = {}, action){
      console.log("action" ,action);
  switch(action.type){
      case GITHUB:
    return { ...state, users: action.payload };
      case SHOW_USER_DATA:
    return { ...state, userDetail : action.payload}
  }

  return state;
}
