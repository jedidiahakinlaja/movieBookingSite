import { ActionTypes } from "../constants/constant-type";

export const setUpComingEvent = (products) => {
    return {
      type: ActionTypes.SET_UPCOMINGEVENT,
      payload: products,
    };
  };


  export const setMovies = (movies) => {
    return {
      type: ActionTypes.SET_MOVIES,
      payload: movies,
    };
  };