import { Deferred } from "jquery"
import { act } from "react-dom/test-utils";
import * as ActionType from "../contants/gameOanTuTi";

let initialState = {
    player: [
        { ma: 'keo', hinhAnh: './img/image-oan-tu-ti/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/image-oan-tu-ti/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/image-oan-tu-ti/bao.png', datCuoc: false },
    ],
    resultGame: "You win!",
    numOfWins: 0,
    numOfPlays: 0,
    computer: { ma: 'bua', hinhAnh: './img/image-oan-tu-ti/bua.png' },
}
const gameOanTuTiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHON_KEO_BUA_BAO: {
            let playerUpdate = state.player.map((item, index) => {
                console.log(action.payload);
                if (item.ma === action.payload) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.player = playerUpdate;
            return { ...state };
        }
        case ActionType.RAN_DOM: {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let computerUpdate = state.player[soNgauNhien];
            state.computer = computerUpdate;
            return { ...state };
        }
        case ActionType.END_GAME: {
            let playerUpdate = state.player.find(item => item.datCuoc);
            let computerUpdate = state.computer;
            switch (playerUpdate.ma) {
                case 'keo':
                    if (computerUpdate.ma === 'keo') {
                        state.resultGame = "Draw match!!!! ^-^";
                    } else if (computerUpdate.ma === 'bao') {
                        state.resultGame = "Congratulations you won!";
                        state.numOfWins+=1;
                    } else {
                        state.resultGame = "You lose! :(((";
                    } break;
                case 'bua':
                    if (computerUpdate.ma === 'bua') {
                        state.resultGame = "Draw match!!!! ^-^";
                    } else if (computerUpdate.ma === 'keo') {
                        state.resultGame = "Congratulations you won!";
                        state.numOfWins+=1;
                    } else {
                        state.resultGame = "You lose! :(((";
                    } break;
                case 'bao':
                    if (computerUpdate.ma === 'bao') {
                        state.resultGame = "Draw match!!!! ^-^";
                    } else if (computerUpdate.ma === 'bua') {
                        state.resultGame = "Congratulations you won!";
                        state.numOfWins+=1;
                    } else {
                        state.resultGame = "You lose! :(((";
                    } break;
                default: state.resultGame= "I love you 3000!";
            }
        state.numOfPlays+=1;

        return {...state };
        }
        default: return {...state };
    }
}
export default gameOanTuTiReducer;