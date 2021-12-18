import { combineReducers } from "redux";
import dogReducer from "./dogReducer"

const reducers = combineReducers({
  dogState: dogReducer,
})

export default reducers;