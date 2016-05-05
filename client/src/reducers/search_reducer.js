import { GITHUB } from '../actions/types';

export default function(state = {}, action){
      // console.log("action" ,action.payload);
  switch(action.type){
      case GITHUB:
    return { ...state, users: action.payload };
  }

  return state;
}
