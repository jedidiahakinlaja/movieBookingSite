import { ActionTypes } from "../constants/constant-type";

const intialState = {
    movies:[]
  };
  

  export const movieReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_MOVIES:
        return { ...state, movies: payload };
      default:
        return state;
    }
  };