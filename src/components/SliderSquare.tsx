import React from 'react';

interface SliderSquareProps {
  color: string;
  colors: string;
  colorl: string;
}

const SliderSquare: React.FC<SliderSquareProps> = ({ color, colors, colorl }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* 2nd transparent border */}
        <div
          className="absolute border-2 opacity-25 w-32 h-32 top-[-1rem] left-[-1rem] transform rotate-45"
          style={{ borderColor: color }}
        />
        {/* 1st transparent border */}
        <div
          className="absolute border-2 opacity-50 w-28 h-28 top-[-0.5rem] left-[-0.5rem] cursor-ew-resize transform rotate-45"
          style={{ borderColor: color }}
        />
        <div
          className="w-24 h-24 flex items-center justify-center cursor-ew-resize transform rotate-45"
          style={{
            background: `linear-gradient(to top, ${colors}, ${color}, ${color}, ${colorl})`,
          }}
        >
          {/* Arrow Top rotated to left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 absolute bottom-[0.5rem] left-[0.5rem] diagonal-bounce-element-left"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Arrow Bottom rotated to right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 rotate-45 absolute top-[0.5rem] right-[0.5rem] diagonal-bounce-element-right"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SliderSquare;
