import { CurrentUserReducer } from "./CurrentUser/currentUserReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({ CurrentUserReducer });
