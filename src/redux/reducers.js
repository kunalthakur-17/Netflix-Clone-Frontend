import { combineReducers } from "redux";
import {
  loginReducer,
  logoutReducer,
  signupReducer,
} from "./auth/reducers";

export default combineReducers({
  loginReducer,
  logoutReducer,
  signupReducer,
  
});
