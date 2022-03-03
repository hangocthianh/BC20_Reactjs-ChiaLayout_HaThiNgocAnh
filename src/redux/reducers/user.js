//import data from "../../user-management-redux/data"
import * as ActionType from "./../contants"
let initialState = {
    userList:
        [
            {
                "id": 1,
                "fullname": "Dinh Phuc Nguyen",
                "username": "dpnguyen",
                "email": "dpnguyen@gmail.com",
                "phoneNumber": "123456789",
                "type": "VIP"
            },
            {
                "id": 2,
                "fullname": "Nguyen Van A",
                "username": "vana",
                "email": "vana@gmail.com",
                "phoneNumber": "123456789",
                "type": "USER"
            }
        ],
    keyword: "",
    userEdit: null,
};
const userReducer = (state = initialState, action) => {
    console.log(action);
    // if(action.type == "DELETE_USER"){

    // } else if(action.type == "UPDATE_USER"){

    // } ......
    switch (action.type) {
        case ActionType.DELETE_USER: {
            const index = state.userList.findIndex((user) => user.id === action.payload.id);
            let userList = [...state.userList]
            if (index !== -1) {
                userList.splice(index, 1);
                // cập nhật lại state <=> tương đương hàm setState trong component
                state.userList = userList;
            }
            return { ...state };
        }

        case ActionType.SUBMIT_USER: {
            let userList = [...state.userList];
            if (action.payload.id) {
                const index = state.userList.findIndex((user) => user.id === action.payload.id);
                if (index !== -1) {
                    userList[index] = action.payload;
                }
            } else {
                const userNew = { ...action.payload, id: new Date().getTime() };
                userList.push(userNew);
            }
            state.userList = userList;
            return { ...state };
        }
        case ActionType.EDIT_USER: {
            state.userEdit = action.payload;
            return { ...state };
        }
        case ActionType.GET_KEYWORD:{
            state.keyword = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default userReducer;