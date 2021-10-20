import React from 'react';

import { motion } from 'framer-motion';

export default function ContactMailList() {
  const postes = [
    { name: 'Président', mail: 'president' },
    { name: 'Vice-président', mail: 'vice-president' },
    { name: 'Secrétaire', mail: 'secretaire' },
    { name: 'Trésorier', mail: 'tresorier' },
    { name: 'Responsable événementiel', mail: 'vice-orga' },
    { name: 'Responsable animations', mail: 'vice-anim' },
    { name: 'Responsable bar', mail: 'vice-bar' },
    { name: 'Responsable revue', mail: 'vice-revue' },
    { name: 'Responsable cafétéria (Kfet)', mail: 'vice-kfet' },
    { name: 'Responsable communication cercle-faculté', mail: 'vice-contact' },
    { name: 'Responsables baptême', mail: 'bapteme' },
    { name: 'Responsable internet', mail: 'vice-web' },
  ];

  const jsxPostesMail = postes.map(poste => (
    <li key={poste.name + '_data'}>
      <motion.p
        className="title"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {poste.name}
      </motion.p>
      <a href={'mailto:' + poste.mail + '@cercle-industriel.be'}>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mail"
        >
          {poste.mail}@cercle-industriel.be
        </motion.p>
      </a>
    </li>
  ));

  return (
    <div data-scroll-section className="container container-list">
      <ul layout="rows top-justify">{jsxPostesMail}</ul>
    </div>
  );
}
