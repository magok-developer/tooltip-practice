import "./App.css";
import Basic from "./components/Basic/Basic";
import OverFlow from "./components/OverFlow/OverFlow";
import Custom from "./components/Custom/Custom";
import Alert from "./components/Alert/Alert";
import Disabled from "./components/Disabled/Disabled";
import Color from "./components/Color/Color";

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Basic />
        <OverFlow />
      </div>

      <div className='wrapper'>
        <Custom />
        <Alert />
      </div>

      <Color />
      <Disabled />
    </div>
  );
}

export default App;
