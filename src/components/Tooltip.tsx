import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Tooltip.css";

interface TooltipProps {
  content: React.ReactNode;
  direction?:
    | "left"
    | "right"
    | "bottom"
    | "top"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  enterDelay?: number;
  leaveDelay?: number;
  tooltipStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  disabled?: boolean;
  children: React.ReactNode;
  hoverNotHidden?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  direction = "topLeft",
  enterDelay = 0,
  leaveDelay = 0,
  style,
  tooltipStyle,
  disabled = false,
  hoverNotHidden,
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [leaveDelayTimeoutId, setLeaveDelayTimeoutid] =
    useState<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;
    if (enterDelay) {
      const id = setTimeout(() => setVisible(true), enterDelay);
      setTimeoutId(id);
    } else if (leaveDelayTimeoutId) {
      clearTimeout(leaveDelayTimeoutId);
      setVisible(true);
    } else {
      setVisible(true);
    }
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const tooltipCoords = calculateTooltipPosition(rect);
      setCoords(tooltipCoords);
    }
  };

  useEffect(() => {
    if (visible && tooltipRef.current) {
      showTooltip();
    } else {
      hideTooltip();
    }
  }, [visible, tooltipRef]);

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    if (leaveDelay || hoverNotHidden) {
      const delay = hoverNotHidden ? 500 : leaveDelay;
      const leaveTimeoutId = setTimeout(() => {
        setVisible(false);
        clearTimeout(leaveTimeoutId);
      }, delay);

      setLeaveDelayTimeoutid(leaveTimeoutId);

      return;
    }

    setVisible(false);
  };

  const handleMouseEnterTooltip = () => {
    if (leaveDelayTimeoutId && hoverNotHidden) {
      clearTimeout(leaveDelayTimeoutId);
    }
  };

  const calculateTooltipPosition = (rect: DOMRect) => {
    const tooltipElement = tooltipRef.current;
    if (!tooltipElement) return { left: 0, top: 0 };

    const left = rect.left - tooltipElement.offsetWidth;

    const styles: { left: number; top: number } = { left: 0, top: 0 };

    switch (direction) {
      case "topLeft":
        styles.left = left + tooltipElement.offsetWidth;
        styles.top = rect.top + window.scrollY - tooltipElement.offsetHeight;
        break;
      case "top":
        styles.left =
          rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2;
        styles.top = rect.top - tooltipElement.offsetHeight;
        break;
      case "topRight":
        styles.left = rect.right - tooltipElement.offsetWidth;
        styles.top = rect.top + window.scrollY - tooltipElement.offsetHeight;
        break;
      case "rightTop":
        styles.left = rect.right;
        styles.top = rect.top;
        break;
      case "right":
        styles.left = rect.right;
        styles.top =
          rect.top +
          window.scrollY +
          rect.height / 2 -
          tooltipElement.offsetHeight / 2;
        break;
      case "rightBottom":
        styles.left = rect.right;
        styles.top = rect.bottom - tooltipElement.offsetHeight;
        break;
      case "bottomRight":
        styles.left = rect.right - tooltipElement.offsetWidth;
        styles.top = rect.bottom + window.scrollY;
        break;
      case "bottom":
        styles.left =
          rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2;
        styles.top = rect.bottom + window.scrollY;
        break;
      case "bottomLeft":
        styles.left = left + tooltipElement.offsetWidth;
        styles.top = rect.bottom;
        break;
      case "leftBottom":
        styles.left = rect.left - tooltipElement.offsetWidth;
        styles.top = rect.bottom - tooltipElement.offsetHeight;
        break;
      case "left":
        styles.left = rect.left - tooltipElement.offsetWidth;
        styles.top =
          rect.top +
          window.scrollY +
          rect.height / 2 -
          tooltipElement.offsetHeight / 2;
        break;
      case "leftTop":
        styles.left = rect.left - tooltipElement.offsetWidth;
        styles.top = rect.top;
        break;

      default:
        styles.left =
          rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2;
        styles.top = rect.top + window.scrollY - tooltipElement.offsetHeight;
    }

    return styles;
  };

  const getTooltipStyle = () => {
    const result = {
      ...style,
      ...tooltipStyle,
      position: "fixed",
      zIndex: 9999,
      left: `${coords.left}px`,
      top: `${coords.top}px`,
      height: 50,
    };

    return result;
  };

  return (
    <div>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ display: "inline-block", position: "relative", ...style }}
        ref={targetRef}
      >
        {children}
      </div>
      {visible &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={getTooltipStyle() as any}
            className='tooltip-content'
            onMouseEnter={handleMouseEnterTooltip}
            onMouseLeave={hideTooltip}
          >
            <div>{content}</div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
