import React from 'react';
import { Link } from 'react-router-dom';

import Slider from './Slider';

export default function Banner({ line1, line2, link = false }) {
  return (
    <div
      data-scroll-section
      layout="column center-center"
      className="container container-full-width slider"
    >
      {link ? (
        <Link to={link}>
          <Slider line1={line1} line2={line2} />
        </Link>
      ) : (
        <Slider line1={line1} line2={line2} />
      )}
    </div>
  );
}
