import { useState } from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  const [disabled, setDisabeld] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setDisabeld(!disabled)}>삭제</button>

      <div className='tooltip-container'>
        <div className='tooltip-row top'>
          <Tooltip content='TLTLTL' direction='topLeft'>
            <button className='tooltip-button'>TLTLTL</button>
          </Tooltip>
          <Tooltip content='Top' direction='top'>
            <button className='tooltip-button'>Top</button>
          </Tooltip>
          <Tooltip content='TR' direction='topRight'>
            <button className='tooltip-button'>TR</button>
          </Tooltip>
        </div>
        <div className='tooltip-row right'>
          <Tooltip content='RT' direction='rightTop'>
            <button className='tooltip-button'>RT</button>
          </Tooltip>
          <Tooltip content='Right' direction='right'>
            <button className='tooltip-button'>Right</button>
          </Tooltip>
          <Tooltip content='RB' direction='rightBottom'>
            <button className='tooltip-button'>RB</button>
          </Tooltip>
        </div>
        <div className='tooltip-row bottom'>
          <Tooltip content='BL' direction='bottomLeft'>
            <button className='tooltip-button'>BL</button>
          </Tooltip>
          <Tooltip content='Bottom' direction='bottom'>
            <button className='tooltip-button'>Bottom</button>
          </Tooltip>
          <Tooltip content='BR' direction='bottomRight'>
            <button className='tooltip-button'>BR</button>
          </Tooltip>
        </div>

        <div className='tooltip-row left'>
          <Tooltip content='LT' direction='leftTop'>
            <button className='tooltip-button'>LT</button>
          </Tooltip>
          <Tooltip content='Left' direction='left'>
            <button className='tooltip-button'>Left</button>
          </Tooltip>
          <Tooltip content='LB' direction='leftBottom'>
            <button className='tooltip-button'>LB</button>
          </Tooltip>
        </div>
      </div>

      <div>
        <Tooltip content='right' direction='right'>
          right
        </Tooltip>
      </div>
      <div>
        <Tooltip content='bottom' direction='bottom'>
          bottom
        </Tooltip>
      </div>
      <div>
        <Tooltip content='topLeft' direction='topLeft'>
          topLeft
        </Tooltip>
      </div>
      <div>
        <Tooltip content='topRight' direction='topRight'>
          topRight
        </Tooltip>
      </div>
      <div>
        <Tooltip content='bottomLeft' direction='bottomLeft'>
          bottomLeft
        </Tooltip>
      </div>
      <div>
        <Tooltip content='bottomRight' direction='bottomRight'>
          bottomRight
        </Tooltip>
      </div>
      <div>
        <Tooltip content='leftTop' direction='leftTop'>
          leftTop
        </Tooltip>
      </div>
      <div>
        <Tooltip content='leftBottom' direction='leftBottom'>
          leftBottom
        </Tooltip>
      </div>
      <div>
        <Tooltip content='rightTop' direction='rightTop'>
          rightTop
        </Tooltip>
      </div>
      <div>
        <Tooltip content='rightBottom' direction='rightBottom'>
          rightBottom
        </Tooltip>
      </div>

      <div>
        <Tooltip
          leaveDelay={1000}
          content={<button onClick={() => alert("응?")}>ㅋㅋ이렇게</button>}
          direction='left'
        >
          딜레이
        </Tooltip>
      </div>

      <div>
        <Tooltip
          leaveDelay={1000}
          content={<div style={{ background: "red" }}>우헤헤</div>}
          direction='left'
        >
          딜레이
        </Tooltip>
      </div>
      <div>
        <Tooltip
          content={<button>ㅋㅋ이렇게</button>}
          direction='rightBottom'
          hoverNotHidden
        >
          후바 낫 해던
        </Tooltip>
      </div>

      <div>
        <Tooltip
          content={"ㅋㅋ이렇게"}
          direction='rightBottom'
          disabled={disabled}
          tooltipStyle={{
            background: "red",
            color: "pink",
          }}
          style={{
            color: "blue",
          }}
        >
          데쓰에이블!
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
