import Tooltip from "../Tooltip";
import "./Alert.css";

const Alert = () => {
  return (
    <div className='alert-container'>
      <div className='alert-top'>
        <Tooltip
          content={
            <>
              <div>Are you sure to delete this task?</div>
              <button
                onClick={() => alert("top tooltip confirm clicked on yes ")}
              >
                Yes
              </button>
            </>
          }
          direction='top'
          hoverNotHidden
        >
          <button className='tooltip-button'>Top</button>
        </Tooltip>
      </div>
      <div className='alert-right'>
        <Tooltip
          content={
            <>
              <div>Are you sure to delete this task?</div>
              <button
                onClick={() => alert("right tooltip confirm clicked on Yes ")}
              >
                Yes
              </button>
            </>
          }
          direction='right'
          hoverNotHidden
        >
          <button className='tooltip-button'>Right</button>
        </Tooltip>
      </div>
      <div className='alert-bottom'>
        <Tooltip
          content={
            <>
              <div>Are you sure to delete this task?</div>
              <button
                onClick={() => alert("bottom tooltip confirm clicked on Yes ")}
              >
                Yes
              </button>
            </>
          }
          direction='bottom'
          hoverNotHidden
        >
          <button className='tooltip-button'>Bottom</button>
        </Tooltip>
      </div>
      <div className='alert-left'>
        <Tooltip
          content={
            <>
              <div>Are you sure to delete this task?</div>
              <button
                onClick={() => alert("left tooltip confirm clicked on Yes ")}
              >
                Yes
              </button>
            </>
          }
          direction='left'
          hoverNotHidden
        >
          <button className='tooltip-button'>Left</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Alert;
