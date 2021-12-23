import { Deferred } from "jquery"

let initialState={
    player:[
        { ma: 'keo', hinhAnh: './img/image-oan-tu-ti/keo.png', datcuoc: false },
        { ma: 'bua', hinhAnh: './img/image-oan-tu-ti/bua.png', datcuoc: true },
        { ma: 'bao', hinhAnh: './img/image-oan-tu-ti/bao.png', datcuoc: false },
    ],
    resultGame: "You win!",
    numOfWins: 0,
    numOfPlays:0,
    computer: { ma: 'bua', hinhAnh: './img/image-oan-tu-ti/bua.png' },
}
const gameOanTuTiReducer = (state = initialState, action)=>{
    switch (action) {
        // case player:
            
        //     return {...state};
    
        default:
            return {...state};
    }

}
export default gameOanTuTiReducer;