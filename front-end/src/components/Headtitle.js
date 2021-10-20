import React from 'react';

import { motion } from 'framer-motion';

export default function Headtitle({ title }) {
  return (
    <div data-scroll-section className="container">
      <motion.h1 className="headtitle">
        <span>{title}</span>
      </motion.h1>
    </div>
  );
}
