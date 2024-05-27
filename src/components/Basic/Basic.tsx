import Tooltip from "../Tooltip";
import "./Basic.css";

const Basic = () => {
  return (
    <div className='tooltip-container'>
      <div className='basic-tooltip-row top'>
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
      <div className='basic-tooltip-column right'>
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
      <div className='basic-tooltip-row bottom'>
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

      <div className='basic-tooltip-column left'>
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
  );
};

export default Basic;
