import {
        GITHUB,
        SHOW_USER_DATA
        } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case GITHUB:
    return { ...state, users: action.payload };
      case SHOW_USER_DATA:
    return { ...state, [action.payload.user_name.id]: action.payload.user_name}
  }

  return state;
}
