/*----React----*/
import React, { useState, useRef } from 'react';

/*--Components--*/
import SliderSquare from './SliderSquare';

type SliderColors = {
  Color: string;
  Colors: string;
  Colorl: string;
}

const Slider: React.FC<SliderColors> = ({ Color, Colors, Colorl }) => {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const currentPosition = moveEvent.clientX;
      const sliderRect = slider.getBoundingClientRect();
      const minPosition = sliderRect.left + 72; /* Square size (fixed on all screen size) it is not the same distance left to right because de square is rotated and not centered */
      const maxPosition = sliderRect.right - 106;

      if (currentPosition >= minPosition && currentPosition <= maxPosition) {
        const newPosition = ((currentPosition - sliderRect.left) / sliderRect.width) * 100;
        setPosition(newPosition);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={sliderRef} className="relative flex items-center justify-center h-screen">
      <div
        onMouseDown={handleMouseDown}
        className="absolute"
        style={{ left: `calc(${position}% - 2rem)` }} // Adjust to center the square correctly
      >
        <SliderSquare color={Color} colors={Colors} colorl={Colorl} />
      </div>
    </div>
  );
};

export default Slider;
