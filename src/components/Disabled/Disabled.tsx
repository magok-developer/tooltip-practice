import { useState } from "react";
import Tooltip from "../Tooltip";
import "./Disabled.css";

const Disabled = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className='disabled-wrapper'>
      <div
        onClick={() => setDisabled(!disabled)}
        className='disabled-text'
        style={{
          color: !disabled ? "white" : "black",
          background: !disabled ? "black" : "lightgrey",
        }}
      >
        {!disabled ? "Disabled" : "Enable"}
      </div>

      <div>
        <Tooltip
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          asperiores atque'
          direction='top'
          disabled={disabled}
        >
          <div
            style={{
              background: "lightgrey",
              padding: "4px",
              borderRadius: "8px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            asperiores atque
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Disabled;
