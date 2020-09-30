import React, { useState, useEffect, useRef } from 'react';

export interface Props {
  children: React.ReactNode;
  style?: any;
  rightClickToStart?: boolean;
  scrollable?: boolean;
}

let clickX = 0;
let clickY = 0;

export function Moveable({
  style,
  rightClickToStart,
  scrollable,
  children,
}: Props) {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [started, setStarted] = useState(false);

  const handleMoveStart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    clickX = e.clientX;
    clickY = e.clientY;
    setStarted(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    e.preventDefault();
    clickX = e.touches[0].clientX;
    clickY = e.touches[0].clientY;
    setStarted(true);
  };

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (started) {
      let movedX = 0;
      let movedY = 0;
      movedX = e.clientX - clickX;
      movedY = e.clientY - clickY;

      setTranslateX(translateX + movedX);
      setTranslateY(translateY + movedY);

      clickX = e.clientX;
      clickY = e.clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    e.preventDefault();
    if (started) {
      let movedX = 0;
      let movedY = 0;
      movedX = e.touches[0].clientX - clickX;
      movedY = e.touches[0].clientY - clickY;

      setTranslateX(translateX + movedX);
      setTranslateY(translateY + movedY);

      clickX = e.touches[0].clientX;
      clickY = e.touches[0].clientY;
    }
  };

  const handleWheel = (e: any) => {
    if (scrollable) {
      if (e.deltaY < 0) {
        setTranslateY(translateY + 8);
      } else {
        setTranslateY(translateY - 8);
      }
    }
  };

  const handleMoveEnd = () => {
    setStarted(false);
  };

  const propsStyle = style || {};
  return (
    <div
      style={{
        ...{
          position: 'relative',
          width: 'fit-content',
          transform: `translate(${translateX}px,${translateY}px)`,
          cursor: started ? 'grabbing' : 'auto',
        },
        ...propsStyle,
      }}
      onContextMenu={rightClickToStart ? handleMoveStart : undefined}
      onMouseDown={rightClickToStart ? undefined : handleMoveStart}
      onMouseUp={handleMoveEnd}
      onMouseLeave={handleMoveEnd}
      onMouseMove={handleMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMoveEnd}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}