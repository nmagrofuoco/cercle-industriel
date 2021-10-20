import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import axios from 'axios';

export default function ComitesPostesList({ year, updateScroller }) {
  const [jsxPostes, setPostes] = useState(null);

  useEffect(() => {
    axios.get('/api/comites/' + year).then(res => {
      setPostes(
        res.data.map(comitard => (
          <li key={comitard.name + '_data'}>
            <motion.img
              onLoad={updateScroller}
              src={'https://cercle-industriel.be/img/' + comitard.photo}
              alt={comitard.name}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.75,
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
              }}
            ></motion.img>
            <motion.p
              className="title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
            >
              {comitard.name}
            </motion.p>
            <motion.p
              className="name"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
            >
              {comitard.poste}
            </motion.p>
          </li>
        ))
      );
    });
  }, [year, updateScroller]);

  if (!jsxPostes) return null;
  return (
    <div data-scroll-section className="container container-list">
      <ul layout="rows top-justify">{jsxPostes}</ul>
    </div>
  );
}
