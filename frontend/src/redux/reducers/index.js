import { combineReducers } from "redux";
import { productsReducer,movieReducer} from  './productReducer'
const reducers = combineReducers({
  allProducts: productsReducer,
  allMovies:movieReducer
});
export default reducers;