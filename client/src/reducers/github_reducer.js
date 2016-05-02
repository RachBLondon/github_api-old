import {
        GITHUB
        } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
      case GITHUB:
    return { ...state, user: action.payload };
  }

  return state;
}
