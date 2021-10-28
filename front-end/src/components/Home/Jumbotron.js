import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function Jumbotron({ updateScroller }) {
  return (
    <div data-scroll-section layout="column top-justify" className="container">
      <div id="jumbotron-text" className="mobile">
        <h1>
          <span className="span-1">
            Le Cercle Industriel est une association sans but lucratif
            regroupant les étudiants de l'École Polytechnique de Louvain.
          </span>
        </h1>
      </div>
      <div id="jumbotron-text" className="desktop">
        <h1>
          <span className="span-1">
            Le Cercle Industriel est une association sans but lucratif
          </span>
          <span className="span-2">
            regroupant les étudiants de l'École Polytechnique de Louvain.
          </span>
        </h1>
      </div>
      <div self="right" id="jumbotron-image">
        <Link to="/comites">
          <figure>
            <motion.img
              onLoad={updateScroller}
              src="https://cercle-industriel.be/img/comites/comite.jpg"
              alt="Le comité en fonction"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.7,
                ease: [0.83, 0, 0.17, 1],
              }}
            ></motion.img>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              href="http://www.w3.org/1999/xlink"
              viewBox="0 0 500 500"
              className="caption"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              <title>Comité en fonction</title>

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
                  aria-label="Photographie de groupe du comité en fonction"
                  textLength="942"
                >
                  Comité en fonction • Comité en fonction • &nbsp;
                </textPath>
              </text>
            </motion.svg>
          </figure>
        </Link>
      </div>
    </div>
  );
}
