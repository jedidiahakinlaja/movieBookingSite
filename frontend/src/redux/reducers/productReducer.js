import { ActionTypes } from "../constants/constant-type";

const intialState = {
    products: [],
    movies:[],
  };
  
  export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_UPCOMINGEVENT:
        return { ...state, products: payload };
      default:
        return state;
    }
  };

  export const movieReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_MOVIES:
        return { ...state, movies: payload };
      default:
        return state;
    }
  };