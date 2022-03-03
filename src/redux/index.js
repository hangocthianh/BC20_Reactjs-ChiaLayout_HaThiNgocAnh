import {combineReducers} from "redux";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
    // combine các child reducer
    userReducer, // userReducer: userReducer,

})

export default rootReducer;