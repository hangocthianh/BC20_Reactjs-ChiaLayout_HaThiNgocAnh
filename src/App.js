
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



function App() {
  return (
    <div class="container">
      {/* <Baitap1/> */}
      {/* <Baitap3/> */}
      <RenderingElements/>
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
    </div>
  );
}

export default App;
