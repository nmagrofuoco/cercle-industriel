import React from 'react';

export default function Slider({ line1, line2 }) {
  return (
    <div>
      <div>
        <span
          data-scroll
          data-scroll-speed="-6"
          data-scroll-direction="horizontal"
          className="slider slider-first"
        >
          {line1}
        </span>
      </div>
      <div>
        <span
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
          className="slider slider-second"
        >
          {line2}
        </span>
      </div>
    </div>
  );
}
