import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DoubleNextIcon from '../Icons/DoubleNextIcon';
import DoublePreviousIcon from '../Icons/DoublePreviousIcon';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';

export default function ComitesList({ comites, current }) {
  const [iterator, setIterator] = useState(current);
  const iconSize = '15';

  const previousIterator = i => {
    let newIterator = iterator - i;
    if (newIterator < 0) newIterator = comites.length;
    setIterator(newIterator);
  };

  const nextIterator = i => {
    let newIterator = iterator + i;
    if (newIterator < 0) newIterator = 0;
    setIterator(newIterator);
  };

  return (
    <div data-scroll-section layout="column top-justify" className="container">
      <div self="right" className="container-comites">
        <div layout="column top-center">
          <Link to={'/comites/' + comites[iterator].year}>
            <p className="name">{comites[iterator].name}</p>
          </Link>
          <div layout="row top-center">
            <div
              onClick={() => previousIterator(2)}
              className={iterator > 1 ? '' : 'hide'}
            >
              <DoublePreviousIcon height={iconSize} width={iconSize} />
            </div>
            <div
              onClick={() => previousIterator(1)}
              className={iterator > 0 ? '' : 'hide'}
            >
              <PreviousIcon height={iconSize} width={iconSize} />
            </div>
            <p className="year">{comites[iterator].year}</p>
            <div
              onClick={() => nextIterator(1)}
              className={iterator < comites.length - 1 ? '' : 'hide'}
            >
              <NextIcon height={iconSize} width={iconSize} />
            </div>
            <div
              onClick={() => nextIterator(2)}
              className={iterator < comites.length - 2 ? '' : 'hide'}
            >
              <DoubleNextIcon height={iconSize} width={iconSize} />
            </div>
          </div>
          <p className={iterator !== current ? 'more' : 'more hide'}>
            <Link to={'/comites/' + comites[iterator].year}>
              Découvrir ce comité
              <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M10.5.964L16.8 5.5 10.5 10.036"
                    strokeWidth="1.4"
                  ></path>
                  <path
                    d="M16.5 5.5H.5"
                    strokeLinecap="square"
                    strokeWidth="1.4"
                  ></path>
                </g>
              </svg>
            </Link>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            href="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            className="caption"
          >
            <title>Anciens comités</title>

            <defs>
              <path
                id="textcircle"
                d="M250,400
        a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                transform="rotate(12,250,250)"
              />
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text>
              <textPath
                href="#textcircle"
                aria-label="Auteurs de l'article"
                textLength="942"
              >
                Anciens comités • Anciens comités • &nbsp;
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
