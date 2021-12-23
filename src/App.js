
import './App.css';
//import Baitap1 from './baitap1';
// import Baitap2 from "./baitap2";
//import Baitap3 from './baitap3';
import RenderingElements from './rendering-elements';
import HandlingEvent from './handling-events';
import State from './state';
import ChangeColorCar from './changeColorCar';
import ListKeys from './list-keys';
import ExampleListKey from './list-keys/example';
import Communication from './communication';
import LiftingStateUpCart from './shopping-cart';
//import Home from './user-management';
import UsermanagementRedux from "./user-management-redux"
import Game from './tic-tac-toe/game';
import FormValidation from './form-validation';
import LifeCycle from './lifecycle';
import GameOanTuTi from './baiTapRedux/game-oan-tu-ti';


function App() {
  return (
    <div>
      {/* <Baitap1/> */}
      {/* <Baitap3/> */}
      {/* <RenderingElements/>
      <hr/>
      <HandlingEvent/>
      <hr/>
      <State/>
      <hr/>
      <ChangeColorCar/>
      <hr/>
      <ListKeys/>
      <hr/>
      <ExampleListKey/>
      <hr/>
      <Communication/>
      <hr/>
      <LiftingStateUpCart/>
      <hr/>
      <Home/>
      <hr/>
      <UsermanagementRedux/> */}
      <hr/>
      <Game/>
      <hr/>
      <FormValidation/>
      <hr/>
      <LifeCycle/>
      <hr/>
      <h2 className="py-4 text-info text-center">GAME OẲN TÙ TÌ</h2>
      <GameOanTuTi/>
    </div>
  );
}

export default App;
