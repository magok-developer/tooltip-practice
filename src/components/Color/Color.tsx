import React from "react";
import Tooltip from "../Tooltip";

const Color = () => {
  return (
    <div className='wrapper color'>
      <Tooltip
        content='Pink'
        direction='top'
        tooltipStyle={{
          background: "pink",
        }}
      >
        <button
          className='tooltip-button'
          style={{
            background: "pink",
          }}
        >
          Pink
        </button>
      </Tooltip>
      <Tooltip
        content='Yellow'
        direction='top'
        tooltipStyle={{
          background: "lemonchiffon",
          color: "black",
        }}
      >
        <button
          className='tooltip-button'
          style={{
            background: "lemonchiffon",
            color: "black",
          }}
        >
          Yellow
        </button>
      </Tooltip>
    </div>
  );
};

export default Color;
