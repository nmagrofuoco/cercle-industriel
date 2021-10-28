import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function MobileNavbar({ startScroller, stopScroller }) {
  const [mobileMenuIsOpen, toggleMobileMenu] = useState(false);

  const variants = {
    logo: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    },
  };

  useEffect(() => {
    if (mobileMenuIsOpen) {
      stopScroller();
    } else {
      startScroller();
    }
  });

  return (
    <div id="mobile-menu" className="mobile">
      <div layout="row top-justify">
        <motion.div
          className="logo"
          initial="initial"
          animate="animate"
          variants={variants.logo}
        >
          <Link to="/">
            <div className="logo-top"></div>
            <div className="logo-bottom"></div>
          </Link>
        </motion.div>
        <motion.div
          className={mobileMenuIsOpen ? 'burger-icon open' : 'burger-icon'}
          initial="initial"
          animate="animate"
          variants={variants.logo}
          onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
      <div
        className={mobileMenuIsOpen ? 'background open' : 'background'}
      ></div>
      <ul className={mobileMenuIsOpen ? 'menu open' : 'menu'}>
        <li className="main-item">
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/presentation"
          >
            Cercle
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/presentation"
          >
            Présentation
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/histoire"
          >
            Histoire
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/comites"
          >
            Comités
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleMobileMenu(!mobileMenuIsOpen)} to="/poles">
            Pôles
          </Link>
        </li>
        <li className="main-item">
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/bapteme"
          >
            Folklore
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/bapteme"
          >
            Baptême
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/calotte"
          >
            Calotte
          </Link>
        </li>
        <li className="main-item">
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/evenements"
          >
            Événements
          </Link>
        </li>
        <li className="main-item">
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/salopette"
          >
            Salopette
          </Link>
        </li>
        <li className="main-item">
          <Link
            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
