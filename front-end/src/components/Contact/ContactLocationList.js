import React from 'react';

import { motion } from 'framer-motion';

export default function ContactLocationList() {
  const locations = [
    {
      name: "Siège de l'ASBL",
      street: 'rue des Wallons',
      num: '58',
      city: '1348 Louvain-la-Neuve',
    },
    {
      name: 'Adresse du bar',
      street: 'ruelle Saint Eloi',
      num: '1',
      city: '1348 Louvain-la-Neuve',
    },
  ];

  const jsxLocations = locations.map(location => (
    <li key={location.name + '_data'}>
      <motion.p
        className="title"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {location.name}
      </motion.p>
      <motion.p
        className="street"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {location.num}, {location.street}
      </motion.p>
      <motion.p
        className="city"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {location.city}
      </motion.p>
    </li>
  ));

  return (
    <div data-scroll-section className="container container-list">
      <ul layout="rows top-justify">{jsxLocations}</ul>
    </div>
  );
}
