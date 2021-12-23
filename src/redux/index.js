import {combineReducers} from "redux";
import userReducer from "./reducers/user";
import gameOanTuTiReducer from "./reducers/gameOanTuTi";

const rootReducer = combineReducers({
    // combine các child reducer
    userReducer, // userReducer: userReducer,
    gameOanTuTiReducer,

})

export default rootReducer;