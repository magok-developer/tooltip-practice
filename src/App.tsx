import "./App.css";
import Basic from "./components/Basic/Basic";
import OverFlow from "./components/OverFlow/OverFlow";
import Delay from "./components/Delay/Delay";
import Alert from "./components/Alert/Alert";
import Color from "./components/Color/Color";
import Disabled from "./components/Disabled/Disabled";

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Basic />
        <OverFlow />
      </div>

      <div className='wrapper'>
        <Delay />
        <Alert />
      </div>

      <Color />
      <Disabled />
    </div>
  );
}

export default App;
