import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function Navbar() {
  const variants = {
    logo: {
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
      },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.7 },
      },
    },
  };
  return (
    <nav data-scroll-section layout="row center-justify" id="menu">
      <div className="desktop">
        <ul className="menu">
          <motion.li
            className="dropdown"
            initial="initial"
            animate="animate"
            variants={variants.item}
          >
            <Link to="/presentation">Cercle</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/presentation">Présentation</Link>
              </li>
              <li>
                <Link to="/histoire">Histoire</Link>
              </li>
              <li>
                <Link to="/comites">Comités</Link>
              </li>
              <li>
                <Link to="/poles">Pôles</Link>
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="dropdown"
            initial="initial"
            animate="animate"
            variants={variants.item}
          >
            <Link to="/bapteme">Folklore</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/bapteme">Baptême</Link>
              </li>
              <li>
                <Link to="/calotte">Calotte</Link>
              </li>
            </ul>
          </motion.li>
        </ul>
      </div>
      <motion.div
        className="logo desktop"
        initial="initial"
        animate="animate"
        variants={variants.logo}
      >
        <Link to="/">
          <div className="logo-top"></div>
          <div className="logo-bottom"></div>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          href="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          className="motto"
        >
          <title>Slogan</title>

          <defs>
            <path
              id="textcircle"
              d="M250,400a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)"
            />
          </defs>
          <rect width="100%" height="100%" fill="none" />
          <text>
            <textPath
              href="#textcircle"
              aria-label="Slogan du Cercle Industriel"
              textLength="942"
            >
              Sexe and chopes • Depuis 1872 • &nbsp;
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="desktop">
        <ul className="menu">
          <motion.li
            initial="initial"
            animate="animate"
            variants={variants.item}
          >
            <Link to="/evenements">Événements</Link>
          </motion.li>
          <motion.li
            initial="initial"
            animate="animate"
            variants={variants.item}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}
