// cách 1: import {DELETE_USER, EDIT_USER, SUBMIT_USER, GET_KEYWORD} from "./../contants"
// cách 2: import tất cả của file contants
import * as ActionType from "./../contants"
const actDeleteUser = (user) => {
    // const action = {
    //     type: "DELETE_USER",
    //     payload: user,
    // };
    // return action;
    // theo cách import 1:
    // return {
    //     type: DELETE_USER,
    //     payload: user,
    // };

    // theo cách import 2:
    return {
        type: ActionType.DELETE_USER,
        payload: user,
    };
};
const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user,
    };
}
const actOnSubmit=(user)=>{
    return{
        type: ActionType.SUBMIT_USER,
        payload: user,
    };
};
const actGetKeywork=(key)=>{
    return{
        type: ActionType.GET_KEYWORD,
        payload: key,
      };
}
export { actDeleteUser, actEditUser , actOnSubmit, actGetKeywork}