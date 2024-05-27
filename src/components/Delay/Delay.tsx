import Tooltip from "../Tooltip";
import "./Delay.css";

const Delay = () => {
  return (
    <div className='delay-wrapper'>
      <Tooltip content='enter-delay 1s' direction='topLeft' enterDelay={1000}>
        <button className='tooltip-button'>enter-delay 1s</button>
      </Tooltip>
      <Tooltip content='leave-delay 1s' direction='top' leaveDelay={1000}>
        <button className='tooltip-button'>leave-delay 1s</button>
      </Tooltip>
      <div>
        <Tooltip content='hover not hidden' direction='topRight' hoverNotHidden>
          <button className='tooltip-button'>hover not hidden</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Delay;
