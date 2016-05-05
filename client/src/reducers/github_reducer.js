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
    return { ...state, [action.payload.userData.id]: action.payload.userData}
  }

  return state;
}
